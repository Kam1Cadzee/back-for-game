import React from 'react';
import {IWord} from '../../typings/IEntity';
import {Table} from 'antd';
import {TagPartOfSpeech} from '../../utils/tagPartOfSpeech';

const { Column } = Table;

interface IWordsContentProps {
  words: IWord[]
}
const WordsContent = ({words}:IWordsContentProps) => {
  const data = words.map((w, i) => ({
    key: w.id,
    en: w.en,
    type: w.type,
    children: w.translate
  }));

  return (
    <Table dataSource={data} pagination={false} size={'small'} showHeader={false}>
      <Column title="EN" dataIndex="en" key="en" width="35%" />
      <Column title="RU" dataIndex="ru" key="ru" width="35%"  />
      <Column
        width="30%"
        title="Part of speech"
        dataIndex="type"
        key="type"
        render={tags => {
          console.log(tags);
          return <TagPartOfSpeech type={tags} />
        }}
      />
    </Table>
  )
};

export default WordsContent;
