import React, {useContext, useEffect, useRef, useState} from 'react';
import {IDisconnectWord, IEntity, ITranslate, IWord} from '../../typings/IEntity';
import {Button, Col, Form, Input, Popconfirm, Row, Table, Tooltip} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import './table.css';
import {PartOfSpeech} from '../../typings/PartOfSpeech';
import {generateClassName} from '../../utils/generateClassName';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../graphql/mutation';
import {defaultDataIdFromObject, gql} from 'apollo-boost';
import TitleTable from './TitleTable';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import AddTranslate from './AddTranslate';
import {isEmptyObject} from '../../utils/isEmptyObject';

const {Column} = Table;

interface IEntityEditCardProps {
  entity: IEntity;
}

interface ICreateWord {
  en: string,
  translate: string[],
  type: PartOfSpeech,
}

const EditableContext = React.createContext(null as any);

const EditableRow = ({index, ...props}: any) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
                        title,
                        editable,
                        children,
                        dataIndex,
                        record,
                        handleSave,
                        ...restProps
                      }: any) => {
  const [editing, setEditing] = useState(false);
  const inputRef: any = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e: any) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({...record, ...values, dataIndex});
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save}/>
      </Form.Item>
    ) : (
      <div
        className={generateClassName('editable-cell-value-wrap', {
          'cell-ru': dataIndex === 'ru'
        })}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  if (dataIndex === 'en' && record.children === undefined) return null;
  if (dataIndex === 'ru' && record.children) return null;
  return <td {...restProps}>{childNode}</td>;
};

const getDataOfFilter = (words: IWord[], disconnectWords: IDisconnectWord[]) => {
  return words.filter(w => !disconnectWords.some(d => d.id === w.id!)).map((w, i) => {
    const filterTranslate = w.translate.filter(t => !w.disconnectTranslate.some(d => d.id === t.id));
    return {
      key: w.id || i,
      en: w.en,
      type: w.type,
      children: filterTranslate.map((t, index) => (
        {
          key: t.id || index,
          ru: t.ru,
          type: t.type,
          count: filterTranslate.length,
          idWord: w.id
        }
      ))
    }
  })
};

interface IDataColumn {
  key: number;
  en: string;
  type: PartOfSpeech;
  children: IDataChildColumn[];
  dataIndex: string;
}

interface IDataChildColumn {
  key: number;
  ru: string;
  type: PartOfSpeech;
  count: number;
  idWord: number;
  dataIndex: string;
}

interface ICache {
  [id: string]: IWord;
}

const EntityEditCard = ({entity}: IEntityEditCardProps) => {
  const [mutationDeleteWord] = useMutation(MUTATION.deleteWord, {
    update: (proxy, {data: {updateWord: {id}}}) => {
      const idFromObject = defaultDataIdFromObject({__typename: 'Entity', id: entity.id})!;
      const fragment = gql`
          fragment completeTodo on Entity {
              disconnectWords {
                  id
              }
          }
      `;
      const {disconnectWords} = proxy.readFragment<any>({fragment, id: idFromObject})!;
      disconnectWords.push({id, __typename: 'Word'});
      proxy.writeFragment({
        id: idFromObject,
        fragment,
        data: {
          disconnectWords
        },
      });
    }
  });
  const [mutationDeleteTranslate] = useMutation(MUTATION.deleteTranslate, {
    update: (proxy, {data: {updateWord: {id, disconnectTranslate}}}) => {
      const idFromObject = defaultDataIdFromObject({__typename: 'Word', id})!;
      const fragment = gql`
          fragment completeTodo on Word {
              disconnectTranslate {
                  id
              }
          }
      `;

      proxy.writeFragment({
        id: idFromObject,
        fragment,
        data: {
          disconnectTranslate
        },
      });
    },
  });
  const [mutationCreateWord] = useMutation(MUTATION.createOrUpdateWordWithTranslate);
  const [mutationUpdate, {loading: loadingUpdate}] = useMutation(MUTATION.updateAllEntity);
  const cache = useRef({} as ICache);
  const isAdd = !entity.id;
  const [noDataWords, setNoDataWords] = useState(entity.words);
  const [disconnectWords, setDisconnectWords] = useState(entity.disconnectWords);

  const truthDataWords = getDataOfFilter(noDataWords, disconnectWords);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleDelete = async (dataDelete: IDataColumn & IDataChildColumn) => {
    if (dataDelete.children) {
      setDisconnectWords(dis => {
        return [...dis, {id: dataDelete.key}];
      });
    } else {
      const newDataWords = [...noDataWords];
      const findWord = newDataWords.find(w => w.id === dataDelete.idWord)!;
      findWord.disconnectTranslate = [...findWord.disconnectTranslate, {id: dataDelete.key}];
      cache.current[dataDelete.idWord] = findWord;
      setNoDataWords(newDataWords);
    }
  };
  const handleSave = (row: IDataColumn & IDataChildColumn) => {
    setNoDataWords(words => {
      const indexWord = words.findIndex(w => w.id === (row.idWord || row.key))!;
      if (row.dataIndex === 'en') {
        words[indexWord].en = row.en;
      } else {
        const indexRu = words[indexWord].translate.findIndex(t => t.id === row.key)!;
        words[indexWord].translate[indexRu].ru = row.ru;
      }
      cache.current[row.idWord || row.key] = words[indexWord];
      return [...words];
    })
  };

  const handleChangeType = (type: PartOfSpeech, id: number, idWord: number) => {
    setNoDataWords(words => {
      const indexWord = words.findIndex(w => w.id === (idWord || id))!;
      if (!idWord) {
        words[indexWord].type = type;
      } else {
        const indexRu = words[indexWord].translate.findIndex(t => t.id === id)!;
        words[indexWord].translate[indexRu].type = type;
      }
      cache.current[idWord || id] = words[indexWord];
      return [...words];
    })
  };

  const handleAdd = async (values: ICreateWord) => {
    const res = await mutationCreateWord({
      variables: {
        entityId: entity.id,
        type: values.type,
        en: values.en,
        translate: values.translate
      }
    });
    const data: IWord = res.data.createOrUpdateWordWithTranslate;
    setNoDataWords(words => {
      return [...words, data]
    })
  };

  const handleAddTranslate = (idWord: number, data: ITranslate) => {
    const findIndex = noDataWords.findIndex(w => w.id === idWord);
    const index = noDataWords[findIndex].translate.findIndex(t => t.id === data.id);
    if (index === -1) {
      noDataWords[findIndex].translate.push(data);
      setNoDataWords([...noDataWords]);
    }
  };

  const handleUpdate = () => {
    mutationUpdate({
      variables: {
        data: {
          entityId: entity.id,
          words: Object.values(cache.current).map(w => ({
            type: w.type,
            id: w.id,
            disconnectTranslate: w.disconnectTranslate.map(d => d.id),
            translate: w.translate.map(t => ({
              id: t.id,
              type: t.type,
              ru: t.ru
            }))
          })),
          disconnectWords: disconnectWords.map(d => d.id),
        }
      }
    }).then(res => {
      cache.current = {};
    });
  };

  return (
    <Row>
      <Col span={24}>
        <Table
          bordered={false}
          showHeader={false}
          components={components}
          dataSource={truthDataWords}
          pagination={false}
          size={'small'}
          rowClassName={() => 'editable-row'}
          title={() => <TitleTable onAdd={handleAdd} onUpdate={handleUpdate} loadingUpdate={loadingUpdate}
                                   disabled={isEmptyObject(cache.current)}/>}
        >
          <Column
            title="EN"
            dataIndex="en"
            key="en"
            width="40%"
            onCell={(record) => ({
              record,
              dataIndex: 'en',
              title: 'EN',
              handleSave: handleSave,
            })}
          />
          <Column
            title="RU"
            dataIndex="ru"
            key="ru"
            width="45%"
            onCell={(record) => ({
              record,
              editable: true,
              dataIndex: 'ru',
              title: 'RU',
              handleSave: handleSave,
            })}
          />
          <Column
            title="Part of speech"
            dataIndex="type"
            key="type"
            width="15%"
            render={(type: PartOfSpeech, record: IDataColumn & IDataChildColumn) => {
              return <SelectPartOfSpeech value={type}
                                         onChange={type => handleChangeType(type, record.key, record.idWord)}/>
            }}/>
          <Column
            title="Operation"
            dataIndex="operation"
            render={(text: any, record: IDataColumn & IDataChildColumn) => {
              if (record.count && record.count === 1) {
                return null;
              }
              return (
                <Row align="middle">
                  {!record.idWord && (
                    <Col span={7}>
                      <AddTranslate idWord={record.key} onAdd={handleAddTranslate}/>
                    </Col>
                  )
                  }
                  <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete({...record})}>
                    <Tooltip title="Delete">
                      <Button danger size="small" shape="circle" icon={<DeleteOutlined/>}/>
                    </Tooltip>
                  </Popconfirm>
                </Row>
              )
            }
            }
          />
        </Table>
      </Col>
    </Row>
  )
};

export default EntityEditCard;
