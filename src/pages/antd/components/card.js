import React, {useState} from 'react'
import {Card, Icon, Avatar, Row, Col, Skeleton, Switch} from 'antd'

const { Meta } = Card;


const CardDemo = ()=> {

  const [loading, setLoading] = useState(false);

  return <div id='cards'>
    <Row>
      <Col span={8}>
        <Card
          title="Default size card"
          extra={<Switch checked={!loading} onChange={()=> setLoading(preState=> !preState)} />}
          style={{ width: 300 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Skeleton loading={loading} avatar active>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Skeleton>
        </Card>
      </Col>
      <Col span={8}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
    </Row>
  </div>
};

export default CardDemo;
