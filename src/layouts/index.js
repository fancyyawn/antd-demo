import React from 'react'

import LayoutDemo from './components/layout'
import HeaderDemo from './components/header'
import SiderDemo from './components/sider'
import FooterDemo from './components/footer'

import './index.less'

export default (props)=>{

  const {children} = props;

  return <LayoutDemo
    header={<HeaderDemo />}
    footer={<FooterDemo />}
    sider={<SiderDemo />}
  >
    {children}
  </LayoutDemo>
}
