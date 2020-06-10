import React, { useRef, useState } from 'react';
import { Button, Col, Popconfirm, Row, Table, Tooltip } from 'antd';
import TitleTableWords from './TitleTableWords';
import { isEmptyObject } from '../../../utils/isEmptyObject';
import { PartOfSpeech } from '../../../typings/PartOfSpeech';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import CreateTranslateOfWord from './CreateTranslateOfWord';
import { IDeleteSmth, ITranslate, IWord } from '../../../typings/IEntity';
import { useMutation } from '@apollo/react-hooks';
import { MUTATION } from '../../../graphql/mutation';
import { EditableCell, EditableRow } from '../../common/EditableTableComponent';
import { DeleteOutlined } from '@ant-design/icons';

const { Column } = Table;

interface ITableEditWordsProps {
  words: IWord[];
  disconnectWords: IDeleteSmth[];
  entityId: number;
}

interface ICreateWord {
  en: string;
  translate: string[];
  type: PartOfSpeech;
}

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

const getDataOfFilter = (words: IWord[], disconnectWords: IDeleteSmth[]) => {
  return words
    .filter((w) => !disconnectWords.some((d) => d.id === w.id!))
    .map((w, i) => {
      const filterTranslate = w.translate.filter(
        (t) => !w.disconnectTranslate.some((d) => d.id === t.id),
      );
      return {
        key: w.id || i,
        en: w.en,
        type: w.type,
        children: filterTranslate.map((t, index) => ({
          key: t.id || index,
          ru: t.ru,
          type: t.type,
          count: filterTranslate.length,
          idWord: w.id,
        })),
      };
    });
};
const TableEditWords = (props: ITableEditWordsProps) => {
  const [mutationCreateWord] = useMutation(
    MUTATION.createOrUpdateWordWithTranslate,
  );
  const [mutationUpdate, { loading: loadingUpdate }] = useMutation(
    MUTATION.updateWordsByEntity,
  );
  const cache = useRef({} as ICache);
  const [noDataWords, setNoDataWords] = useState(props.words);
  const [disconnectWords, setDisconnectWords] = useState(props.disconnectWords);
  const truthDataWords = getDataOfFilter(noDataWords, disconnectWords);

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleDelete = async (dataDelete: IDataColumn & IDataChildColumn) => {
    if (dataDelete.children) {
      setDisconnectWords((dis) => {
        return [...dis, { id: dataDelete.key }];
      });
    } else {
      const newDataWords = [...noDataWords];
      const findWord = newDataWords.find((w) => w.id === dataDelete.idWord)!;
      findWord.disconnectTranslate = [
        ...findWord.disconnectTranslate,
        { id: dataDelete.key },
      ];
      cache.current[dataDelete.idWord] = findWord;
      setNoDataWords(newDataWords);
    }
  };
  const handleSave = (row: IDataColumn & IDataChildColumn) => {
    setNoDataWords((words) => {
      const indexWord = words.findIndex(
        (w) => w.id === (row.idWord || row.key),
      )!;
      if (row.dataIndex === 'en') {
        words[indexWord].en = row.en;
      } else {
        const indexRu = words[indexWord].translate.findIndex(
          (t) => t.id === row.key,
        )!;
        words[indexWord].translate[indexRu].ru = row.ru;
      }
      cache.current[row.idWord || row.key] = words[indexWord];
      return [...words];
    });
  };

  const handleChangeType = (type: PartOfSpeech, id: number, idWord: number) => {
    setNoDataWords((words) => {
      const indexWord = words.findIndex((w) => w.id === (idWord || id))!;
      if (!idWord) {
        words[indexWord].type = type;
      } else {
        const indexRu = words[indexWord].translate.findIndex(
          (t) => t.id === id,
        )!;
        words[indexWord].translate[indexRu].type = type;
      }
      cache.current[idWord || id] = words[indexWord];
      return [...words];
    });
  };

  const handleAdd = async (values: ICreateWord) => {
    const res = await mutationCreateWord({
      variables: {
        entityId: props.entityId,
        type: values.type,
        en: values.en,
        translate: values.translate,
      },
    });
    const data: IWord = res.data.createOrUpdateWordWithTranslate;
    setNoDataWords((words) => {
      return [...words, data];
    });
  };

  const handleAddTranslate = (idWord: number, data: ITranslate) => {
    const findIndex = noDataWords.findIndex((w) => w.id === idWord);
    const index = noDataWords[findIndex].translate.findIndex(
      (t) => t.id === data.id,
    );
    if (index === -1) {
      noDataWords[findIndex].translate.push(data);
      setNoDataWords([...noDataWords]);
    }
  };

  const handleUpdate = () => {
    mutationUpdate({
      variables: {
        data: {
          entityId: props.entityId,
          words: Object.values(cache.current).map((w) => ({
            type: w.type,
            id: w.id,
            disconnectTranslate: w.disconnectTranslate.map((d) => d.id),
            translate: w.translate.map((t) => ({
              id: t.id,
              type: t.type,
              ru: t.ru,
            })),
          })),
          disconnectWords: disconnectWords.map((d) => d.id),
        },
      },
    }).then((res) => {
      cache.current = {};
    });
  };
  return (
    <Table
      bordered={false}
      showHeader={false}
      components={components}
      dataSource={truthDataWords}
      pagination={false}
      size={'small'}
      rowClassName={() => 'editable-row'}
      title={() => (
        <TitleTableWords
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          loadingUpdate={loadingUpdate}
          disabled={isEmptyObject(cache.current)}
        />
      )}
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
        render={(
          type: PartOfSpeech,
          record: IDataColumn & IDataChildColumn,
        ) => {
          return (
            <SelectPartOfSpeech
              value={type}
              onChange={(type) =>
                handleChangeType(type, record.key, record.idWord)
              }
            />
          );
        }}
      />
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

                  <CreateTranslateOfWord
                    idWord={record.key}
                    onAdd={handleAddTranslate}
                  />
              )}
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => handleDelete({ ...record })}
              >
                <Tooltip title="Delete">
                  <Button
                    danger
                    size="small"
                    shape="circle"
                    icon={<DeleteOutlined />}
                  />
                </Tooltip>
              </Popconfirm>
            </Row>
          );
        }}
      />
    </Table>
  );
};

export default TableEditWords;
