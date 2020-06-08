import React, {useContext, useEffect, useRef, useState} from 'react';
import {IDisconnectWord, IEntity, IWord} from '../../typings/IEntity';
import {Button, Form, Input, Popconfirm, Select, Table} from 'antd';
import './table.css';
import {PartOfSpeech} from '../../typings/PartOfSpeech';
import {TagPartOfSpeech} from '../../utils/tagPartOfSpeech';
import {generateClassName} from '../../utils/generateClassName';
import {useMutation} from '@apollo/react-hooks';
import {MUTATION} from '../../graphql/mutation';
import {defaultDataIdFromObject, gql} from 'apollo-boost';
import TitleTable from './TitleTable';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import QUERIES from '../../graphql/queries';

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
}

interface IDataChildColumn {
  key: number;
  ru: string;
  type: PartOfSpeech;
  count: number;
  idWord: number;
}

const EntityEditCard = ({entity}: IEntityEditCardProps) => {
  console.log(entity)
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
  const isAdd = !entity.id;
  const [noDataWords, setNoDataWords] = useState(getDataOfFilter(entity.words, []));

  const truthDataWords = isAdd ? noDataWords : getDataOfFilter(entity.words, entity.disconnectWords);
  console.log(truthDataWords)
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleDelete = async (dataDelete: IDataColumn & IDataChildColumn) => {
    if (dataDelete.children) {
      if (isAdd) {
        setNoDataWords(noDataWords.filter(item => item.key !== dataDelete.key));
      } else {
        await mutationDeleteWord({
          variables: {
            idEntity: entity.id,
            idWord: dataDelete.key
          }
        })
      }
    } else {
      if(isAdd) {
        const topLevelIndex = noDataWords.findIndex(item => item.children.some(t => t.key === dataDelete.key))!;
        const topLevel = noDataWords[topLevelIndex];
        if (topLevel.children.length === 1) {
          setNoDataWords(noDataWords.filter(item => item.key !== topLevel.key));
        } else {
          topLevel.children = topLevel.children.filter(item => item.key !== dataDelete.key);
          noDataWords[topLevelIndex] = topLevel;
          setNoDataWords([...noDataWords]);
        }
      }
      else {
        await mutationDeleteTranslate({
          variables: {
            idTransalte: dataDelete.key,
            idWord: dataDelete.idWord
          }
        });
      }
    }
  };
  const handleSave = (row: any) => {
    const newData = [...noDataWords];
    let index = -1;
    if (row.dataIndex === 'ru') {
      index = newData.findIndex(item => item.children.some(t => t.key === row.key))
    } else {
      index = newData.findIndex(item => row.key === item.key);
    }
    if (index === -1) return;
    const item = newData[index];
    if (row.dataIndex === 'ru') {
      const indexChild = item.children.findIndex(item => row.key === item.key);
      item.children.splice(indexChild, 1, {...item.children, ...row});
    } else {
      newData.splice(index, 1, {...item, ...row});
    }
    setNoDataWords(newData);
  };

  const handleAdd = async (values: ICreateWord) => {
    if(isAdd) {

    }
    else {
      await mutationCreateWord({
        variables: {
          entityId: entity.id,
          type: values.type,
          en: values.en,
          translate: values.translate
        },
        awaitRefetchQueries: true,
        refetchQueries: [{
          query: QUERIES.GET_ENTITIES_BY_WORD,
          variables: {
            word: values.en
          }
        }]
      })
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{remember: true}}
    >
      <Table
        bordered={false}
        showHeader={false}
        components={components}
        dataSource={truthDataWords}
        pagination={false}
        size={'small'}
        rowClassName={() => 'editable-row'}
        title={() => <TitleTable idEntity={entity.id!} onAdd={handleAdd}/>}
      >
        <Column
          title="EN"
          dataIndex="en"
          key="en"
          width="25%"
          onCell={(record) => ({
            record,
            editable: true,
            dataIndex: 'en',
            title: 'EN',
            handleSave: handleSave,
          })}
        />
        <Column
          title="RU"
          dataIndex="ru"
          key="ru"
          width="40%"
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
          width="20%"
          render={(type: PartOfSpeech) => {
            return <SelectPartOfSpeech defaultValue={type} />
          }}/>
        <Column
          title="Operation"
          dataIndex="operation"
          render={(text: any, record: any) => {
            if (record.count && record.count === 1) {
              return null;
            }
            return (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete({...record})}>
                <a>Delete</a>
              </Popconfirm>
            )
          }
          }
        />
      </Table>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isAdd ? 'Create' : 'Update'}
        </Button>
      </Form.Item>
    </Form>
  )
};

export default EntityEditCard;
