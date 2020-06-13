import React, { useState } from 'react';
import {Button, Form, Input, Popover, Row, Select, Switch} from 'antd';
import { PlusOutlined, CloseOutlined, CheckOutlined, LeftSquareOutlined, RightSquareOutlined } from '@ant-design/icons';
import SelectPartOfSpeech from './SelectPartOfSpeech';
import { PartOfSpeech } from '../../../typings/PartOfSpeech';
import { useQuery } from '@apollo/react-hooks';
import QUERIES from '../../../graphql/queries';

const { Search } = Input;
const { Option } = Select;
const { Group } = Button;

interface ITitleTableProps {
  onAdd: any;
  onUpdate: any;
  loadingUpdate: boolean;
  disabled: boolean;
  isShowDeleted: boolean,
  checkedDeleted: (value: boolean) => any;
  onPrev: any;
  onNext: any;
  disabledPrev: boolean;
  disabledNext: boolean;
}

interface IContentTitleTableProps {
  onAdd: any;
  onClose: any;
}

const ContentTitleTable = ({ onClose, onAdd }: IContentTitleTableProps) => {
  const [options, setOptions] = useState([]);
  const { refetch } = useQuery(QUERIES.TRANSLATE_WORD, {
    skip: true,
  });
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    onAdd(values);
    onClose();
  };

  const handleChange = (value: PartOfSpeech) => {
    form.setFieldsValue({ type: value });
  };

  const handleSearch = async (value: string, event: any) => {
    event.preventDefault();
    if (value === '') return;
    const res = await refetch({
      word: value,
    });

    const translateWord: any = res.data.translateWord;
    setOptions(translateWord.translate.map((t: any) => t.ru));
    form.setFieldsValue({
      translate: translateWord.translate.map((t: any) => t.ru),
    });
    handleChange(translateWord.type);
  };

  return (
    <Form name="basic" onFinish={onFinish} form={form}>
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
        <Select mode="tags" tokenSeparators={[',']}>
          {options.map((o) => {
            return <Option value={o}>{o}</Option>;
          })}
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
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            shape="circle"
            icon={<PlusOutlined />}
          />
        </Form.Item>
      </Input.Group>
    </Form>
  );
};

const TitleTableWords = ({
  onAdd,
  onUpdate,
  loadingUpdate,
  disabled,
  isShowDeleted,
  checkedDeleted,
  onPrev,
  onNext,
  disabledNext,
  disabledPrev
}: ITitleTableProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleOk = () => {
    setIsShow(false);
  };

  const handleVisibleChange = (visible: boolean) => {
    setIsShow(visible);
  };
  return (
    <Row justify="space-between">
      <div>
        <Button
          size="small"
          shape="circle-outline"
          onClick={onPrev}
          disabled={disabledPrev}
          icon={<LeftSquareOutlined />}
        />
        <Button
          size="small"
          shape="circle-outline"
          onClick={onNext}
          disabled={disabledNext}
          icon={<RightSquareOutlined />}
        />
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={isShowDeleted}
          onChange={checked => checkedDeleted(checked)}
        />
        Show deleted
      </div>
      <Button.Group>
        <Button
          onClick={onUpdate}
          type="primary"
          disabled={disabled || loadingUpdate}
          loading={loadingUpdate}
        >
          Update
        </Button>
        <Popover
          content={<ContentTitleTable onClose={handleOk} onAdd={onAdd} />}
          trigger="click"
          visible={isShow}
          onVisibleChange={handleVisibleChange}
          placement="rightBottom"
        >
          <Button onClick={() => setIsShow(true)}>Add word</Button>
        </Popover>
      </Button.Group>
    </Row>
  );
};

export default TitleTableWords;
