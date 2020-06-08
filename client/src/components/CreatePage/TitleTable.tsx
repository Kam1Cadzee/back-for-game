import React, {useEffect, useState} from 'react';
import {Row, Button, Modal, Popover, Form, Input, Select} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import {PartOfSpeech} from '../../typings/PartOfSpeech';
import {useMutation, useQuery} from '@apollo/react-hooks';
import QUERIES from '../../graphql/queries';
import {TranslateWordReturn} from '../../typings/GENERATE_TYPES';
const { Search } = Input;
const { Option } = Select;

interface ITitleTableProps {
  idEntity: number;
  onAdd: any;
}
interface IContentTitleTableProps extends ITitleTableProps{
  onClose: any;
}

const ContentTitleTable = ({idEntity, onClose, onAdd}:IContentTitleTableProps) => {
  const [options, setOptions] = useState([]);
  const {refetch} = useQuery(QUERIES.TRANSLATE_WORD, {
    skip: true
  });
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values)
    onAdd(values);
    onClose();
  };

  const handleChange = (value: PartOfSpeech) => {
    form.setFieldsValue({ type: value });
  };

  const handleSearch = async (value: string, event: any) => {
    event.preventDefault();
    if(value === '') return ;
    const res = await refetch({
      word: value
    });

    const translateWord: any = res.data.translateWord;
    setOptions(translateWord.translate.map((t: any) => t.ru));
    form.setFieldsValue({ translate: translateWord.translate.map((t: any) => t.ru) });
    handleChange(translateWord.type);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="en"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Search onSearch={handleSearch} placeholder="Word" enterButton />
      </Form.Item>
      <Form.Item
        name="translate"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Select mode="tags"  tokenSeparators={[',']}>
          {
            options.map(o => {
              return (
                <Option value={o}>{o}</Option>
              )
            })
          }
        </Select>
      </Form.Item>
      <Input.Group compact size="small">
        <Form.Item
          name="type"
          rules={[{ required: true, message: 'Please input your username!' }]}
          initialValue={PartOfSpeech.OTHER}
        >
          <SelectPartOfSpeech onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" shape="circle" icon={<PlusOutlined />} />
        </Form.Item>
      </Input.Group>
    </Form>
  )
};

const TitleTable = ({idEntity, onAdd}: ITitleTableProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleOk = () => {
    setIsShow(false);
  };

  const handleVisibleChange = (visible: boolean) => {
    setIsShow(visible);
  };
  return (
    <Row justify="end">
      <Button.Group>
        <Popover
          content={<ContentTitleTable onClose={handleOk} idEntity={idEntity} onAdd={onAdd}/>}
          trigger="click"
          visible={isShow}
          onVisibleChange={handleVisibleChange}
          placement="rightBottom"
        >
          <Button onClick={() => setIsShow(true)}>Add word</Button>
        </Popover>
      </Button.Group>
    </Row>
  )
};

export default TitleTable;
