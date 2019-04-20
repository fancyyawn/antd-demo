import React from 'react'
import {Avatar} from 'antd'

import Menus from  './menus'

import useFeedback from './useFeedback'

const LogoDemo = ()=>(
  <a href='https://ant.design/index-cn' target='_blank' rel='noopener noreferrer' style={{paddingRight: 15}}>
    <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
  </a>
);

export default ()=>{

  const {drawer, feedbackMenus} = useFeedback();

  return (
    <>
      <LogoDemo />
      {Menus(feedbackMenus)}
      {drawer}
    </>
  )
}
