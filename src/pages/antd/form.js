import React from 'react'
import {Breadcrumb, Divider, Row} from 'antd';
import FormDemo from '@/pages/antd/components/form'

export default ()=>(

  <div>

    <Breadcrumb separator=">">
      <Breadcrumb.Item href="/">Antd</Breadcrumb.Item>
      <Breadcrumb.Item href="/antd/form">form</Breadcrumb.Item>
    </Breadcrumb>

    <Row>
      <Divider>Form</Divider>
      <FormDemo />
    </Row>

  </div>
);
