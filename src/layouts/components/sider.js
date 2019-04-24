import React, {useState} from 'react'
import {
  Statistic, Divider, Anchor,
  Timeline, Icon, Tag, Row, Col,
  Card, Steps, Carousel,
  Typography, Calendar,
  PageHeader, Badge,
  Switch
} from 'antd'
import TreeDemo from './tree';
import './carousel.less'

const { Link } = Anchor;
const AnchorDemo = ()=>{
  const [affix, setAffix] = useState(false);
  return <div>

    <Switch style={{marginBottom: 10, marginLeft: 300}} checked={affix} onChange={checked=> setAffix(checked)} checkedChildren='Affix' unCheckedChildren='UnAffix'/>

    <Anchor offsetTop='20' affix={affix}>
      <Link href="#tree" title="Tree" />
      <Link href="#anchor" title="Anchor" />
      <Link href="#timeline" title="Timeline" />
      <Link href="#steps" title="Steps" />
      <Link href="#tag" title="Tag" />
      <Link href="#badge" title="Badge" />
      <Link href="#calendar" title="Calendar" />
      <Link href="#typography" title="Typography" />
      <Link href="#statistic" title="Statistic" />
      <Link href="#carousel" title="Carousel" />
    </Anchor>
  </div>
};


const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
const StatisticDemo = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Countdown title="Countdown" value={deadline} onFinish={()=>{console.log('finished!')}} />
    </Col>
    <Col span={12}>
      <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
    </Col>
    <Col span={12} style={{ marginTop: 32 }}>
      <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
    </Col>
    <Col span={12} style={{ marginTop: 32 }}>
      <Card>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<Icon type="arrow-down" />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);

const TimeLineDemo = () => (
  <Timeline mode="alternate">
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
  </Timeline>
);


const Step = Steps.Step;
const StepDemo = () => (
  <div>
    <Steps direction="vertical" current={1} style={{marginBottom: 20}}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>

    <Steps progressDot current={1} size="small">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </div>
);

const TagDemo = ()=> (
  <div style={{paddingLeft: 30, paddingRight: 30}}>
    <Tag style={{marginBottom: 5}} color="magenta">magenta</Tag>
    <Tag style={{marginBottom: 5}} color="red">red</Tag>
    <Tag style={{marginBottom: 5}} color="volcano">volcano</Tag>
    <Tag style={{marginBottom: 5}} color="orange">orange</Tag>
    <Tag style={{marginBottom: 5}} color="gold">gold</Tag>
    <Tag style={{marginBottom: 5}} color="lime">lime</Tag>
    <Tag style={{marginBottom: 5}} color="green">green</Tag>
    <Tag style={{marginBottom: 5}} color="cyan">cyan</Tag>
    <Tag style={{marginBottom: 5}} color="blue">blue</Tag>
    <Tag style={{marginBottom: 5}} color="geekblue">geekblue</Tag>
    <Tag style={{marginBottom: 5}} color="purple">purple</Tag>
    <Tag style={{marginBottom: 5}} color="#f50">#f50</Tag>
    <Tag style={{marginBottom: 5}} color="#2db7f5">#2db7f5</Tag>
    <Tag style={{marginBottom: 5}} color="#87d068">#87d068</Tag>
    <Tag style={{marginBottom: 5}} color="#108ee9">#108ee9</Tag>
  </div>
);

// import './carousel.less'
const CarouselDemo = () => (
  <Carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
);

const CalendarDemo = ()=> <Calendar fullscreen={false} />;


const { Title, Paragraph, Text } = Typography;
const TypoDemo = ()=>(
  <Typography>

    <Title>介绍</Title>
    <Paragraph>
      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
    </Paragraph>
    <Paragraph>
      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 Ant Design。基于<Text mark>『确定』和『自然』</Text>的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于<Text strong>更好的用户体验</Text>。
    </Paragraph>
    <Title level={2}>设计资源</Title>
    <Paragraph>
      我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和 <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
    </Paragraph>

    <Paragraph>
      <ul>
        <li><a href="/docs/spec/proximity">设计原则</a></li>
        <li><a href="/docs/pattern/navigation">设计模式</a></li>
        <li><a href="/docs/resource/download">设计资源</a></li>
      </ul>
    </Paragraph>
  </Typography>
);

export default ()=>{
  return (
    <div>
      <PageHeader
        onBack={() => null}
        title="PageHeader"
        subTitle="This is page header"
      />

      <Divider id='anchor'>Anchor</Divider>
      <AnchorDemo />

      <Divider id='tree'>Tree</Divider>
      <TreeDemo />

      <Divider id='timeline'>Timeline</Divider>
      <TimeLineDemo />

      <Divider id='steps'>Steps</Divider>
      <StepDemo />

      <Divider id='tag'>Tag</Divider>
      <TagDemo />

      <Divider id='badge'>Badge</Divider>
      <div>
        <Badge count={25} />
        <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
        <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
      </div>

      <Divider id='calendar'>Calendar</Divider>
      <CalendarDemo />

      <Divider id='typography'>Typography</Divider>
      <TypoDemo />

      <Divider id='statistic'>Statistic</Divider>
      <StatisticDemo />

      <Divider id='carousel'>Carousel</Divider>
      <CarouselDemo />

    </div>
  );
}
