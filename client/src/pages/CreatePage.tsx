import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row} from 'antd';
import {useQuery} from '@apollo/react-hooks';
import QUERIES from '../graphql/queries';
import {IEntity} from '../typings/IEntity';
import EntityEditCard from '../components/CreatePage/EntityEditCard';


const CreatePage = () => {
  const [entities, setEntities] = useState([] as IEntity[]);
  const {refetch, data} = useQuery(QUERIES.GET_ENTITIES_BY_WORD, {
    skip: true,
  });
  const {refetch: refetchParse} = useQuery(QUERIES.TRANSLATE_WORD_WITH_PARSE, {
    skip: true,
  });
  const handleFinish = async ({search}: any) => {
    setEntities([]);
    let res = await refetch({
      word: search
    });
    if(res && res.data.getEntitiesByWord.length === 0) {
      res = await refetchParse({
        word: search
      });
      setEntities([res.data.translateWordWithParse]);
    }
    else {
      setEntities(res.data.getEntitiesByWord);
    }
  };
  console.log(data)
  return (
    <Row>
      <Col span={24}>
        <Form onFinish={handleFinish} layout={'inline'}>
          <Form.Item
            name="search"
          >
            <Input placeholder="Search" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </Col>
      {
        entities.map((e: any, index: any) => {
          return (
            <Col flex="1" key={e.id || index}>
              <EntityEditCard entity={e}/>
            </Col>
          )
        })
      }
    </Row>
  )
};

export default CreatePage;
