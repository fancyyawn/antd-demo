import {Dropdown, Icon, Menu} from "antd";
import {Link} from "react-router-dom";
import React from "react";

const {Item} = Menu;

const Menus = (feedbackMenus)=> {
  return <Menu style={{display: 'inline-block'}} mode="horizontal" theme="light">
    <Item key='form'>
      <Link to="/antd/form"><Icon type='form' /> form</Link>
    </Item>
    <Item key='comment'>
      <Link to="/antd/comment"><Icon type='star' /> comment</Link>
    </Item>
    <Item key='list'>
      <Link to="/antd/list"><Icon type='bars' /> list</Link>
    </Item>
    <Item key='card'>
      <Link to="/antd/card"><Icon type='book' /> card</Link>
    </Item>
    <Item key='table'>
      <Link to="/antd/table"><Icon type='table' /> table</Link>
    </Item>
    <Dropdown overlay={<Menu mode='vertical'>{feedbackMenus}</Menu>}>
      <span style={{paddingLeft: 10}}><Icon type='rollback' />Feedback <Icon type="down" /></span>
    </Dropdown>
  </Menu>
};

export default Menus;
