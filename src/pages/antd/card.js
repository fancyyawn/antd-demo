import React from 'react'
import {Breadcrumb, Divider} from 'antd';
import CardDemo from "@/pages/antd/components/card";

export default ()=>(

  <div>

    <Breadcrumb separator=">">
      <Breadcrumb.Item href="/">Antd</Breadcrumb.Item>
      <Breadcrumb.Item href="/antd/card">card</Breadcrumb.Item>
    </Breadcrumb>

    <Divider>Cards</Divider>
    <CardDemo />

  </div>
);
