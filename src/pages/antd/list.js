import React from 'react'
import {Breadcrumb} from 'antd';
import ListDemo from "@/pages/antd/components/list";

export default ()=>(

  <div>

    <Breadcrumb separator=">">
      <Breadcrumb.Item>Antd</Breadcrumb.Item>
      <Breadcrumb.Item href="/antd/list">List</Breadcrumb.Item>
    </Breadcrumb>

    <ListDemo />

  </div>
);
