import React from 'react'
import {Tabs, Icon, List, Avatar, Card, Collapse, Row, Col} from 'antd'

const {TabPane} = Tabs;

const Panel = Collapse.Panel;

const listData = [];
for (let i = 0; i < 13; i++) {
  listData.push({
    id: i,
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ListTable = () => <List
  itemLayout="vertical"
  size="large"
  pagination={{
    onChange: (page) => {
      console.log(page);
    },
    pageSize: 3,
  }}
  dataSource={listData}
  footer={<div><b>ant design</b> footer part</div>}
  renderItem={item => (
    <List.Item
      key={item.title}
      actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
      extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
    >
      <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
        title={<a href={item.href}>{item.title}</a>}
        description={item.description}
      />
      {item.content}
    </List.Item>
  )}
/>;

const ListCard = ()=> (<List
  grid={{
    gutter: 16,
    column: 3
  }}
  pagination={{
    onChange: (page) => {
      console.log(page);
    },
    pageSize: 3,
  }}
  dataSource={listData}
  renderItem={item => (
    <List.Item>
      <Card title={item.title}>{item.description}</Card>
    </List.Item>
  )}
/>
);

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const CollapseRichDemo = () => <Collapse
  accordion
  bordered={false}
  defaultActiveKey={['0']}
  expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
>
  {
    listData.map(i=>  <Panel header={i.title} key={i.id} style={customPanelStyle}>
      <h3>{i.description}</h3>
      <p>{i.content}</p>
    </Panel>)
  }
</Collapse>;

const CollapseSimpleDemo = () => <Collapse
  accordion
  bordered
  defaultActiveKey={['0']}
>
  {
    listData.map(i=>  <Panel header={i.title} key={i.id}>
      <h3>{i.description}</h3>
      <p>{i.content}</p>
    </Panel>)
  }
</Collapse>;

const ListDemo = ()=> (
  <div id='list'>
    <Tabs defaultActiveKey="list-table">
      <TabPane tab={<span><Icon type="apple" />list-table</span>} key="list-table">
        <ListTable />
      </TabPane>
      <TabPane tab={<span><Icon type="android" />list-card</span>} key="list-card">
        <ListCard />
      </TabPane>
      <TabPane tab={<span><Icon type="android" />Collapse</span>} key="Collapse">
        <Row>
          <Col span={11}>
            <CollapseSimpleDemo />
          </Col>
          <Col span={2} />
          <Col span={11}>
            <CollapseRichDemo />
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  </div>
);

export default ListDemo;
