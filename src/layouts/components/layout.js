import React from 'react';

import {Affix, BackTop, Layout} from 'antd';


const {Header, Content, Footer, Sider} = Layout;


export default ({header, sider, footer, children}) => {

  return (
    <Layout>
      <Affix>
        <Header style={{backgroundColor: '#fff', borderBottom: '10x solid grey'}}>
          {header}
        </Header>
      </Affix>
      <Layout>
        <Content style={{padding: 20, backgroundColor: '#fff'}}>
          {children}
        </Content>
        <Sider style={{padding: 20, borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: "#e0e0e0"}} theme='light' width='30%' collapsible reverseArrow collapsedWidth={0}>
          {sider}
        </Sider>
      </Layout>
      <Footer>
        {footer}
      </Footer>
      <BackTop visibilityHeight='20' />
    </Layout>
  );
}


