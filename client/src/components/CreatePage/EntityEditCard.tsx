import React, {useContext, useEffect, useRef, useState} from 'react';
import {IEntity} from '../../typings/IEntity';
import {Button, Form, Input, Popconfirm, Select, Table} from 'antd';
import './table.css';
import {PartOfSpeech} from '../../typings/PartOfSpeech';
import {TagPartOfSpeech} from '../../utils/tagPartOfSpeech';
import {usePartOfSpeech} from '../../useHooks/usePartOfSpeech';
import {generateClassName} from '../../utils/generateClassName';

const {Option} = Select;
const {Column} = Table;

interface IEntityEditCardProps {
  entity: IEntity;
}

const EditableContext = React.createContext(null as any);

function tagRender(props: any) {
  const {label} = props;

  return <TagPartOfSpeech type={label}/>;
}

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

const EntityEditCard = ({entity}: IEntityEditCardProps) => {
  const parts = usePartOfSpeech();
  const isAdd = !entity.id;
  const [dataWords, setDataWords] = useState(entity.words.map((w, i) => ({
    key: w.id || i,
    en: w.en,
    type: w.type,
    children: w.translate.map((t, index) => ({key: t.id || index, ru: t.ru, type: t.type}))
  })));

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleDelete = (dataDelete: any) => {
    if (dataDelete.children) {
      setDataWords(dataWords.filter(item => item.key !== dataDelete.key));
    } else {
      const topLevelIndex = dataWords.findIndex(item => item.children.some(t => t.key === dataDelete.key))!;
      const topLevel = dataWords[topLevelIndex];
      if (topLevel.children.length === 1) {
        setDataWords(dataWords.filter(item => item.key !== topLevel.key));
      } else {
        topLevel.children = topLevel.children.filter(item => item.key !== dataDelete.key);
        dataWords[topLevelIndex] = topLevel;
        setDataWords([...dataWords]);
      }
    }
  };
  const handleSave = (row: any) => {
    const newData = [...dataWords];
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
    setDataWords(newData);
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
        dataSource={dataWords}
        pagination={false}
        size={'small'}
        rowClassName={() => 'editable-row'}
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
            return <Select
              tagRender={tagRender}
              defaultValue={type}
              style={{width: '100%'}}
              bordered={false}
              suffixIcon={null}
            >
              {
                parts.map(p => {
                  return (
                    <Option value={p.type}>
                      <TagPartOfSpeech type={p.type}/>
                    </Option>
                  )
                })
              }
            </Select>
          }}/>
        <Column
          title="Operation"
          dataIndex="operation"
          render={(text: any, record: any) =>
            (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete({...record})}>
                <a>Delete</a>
              </Popconfirm>
            )}
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
