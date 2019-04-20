import React from 'react'
import {Breadcrumb, Divider} from 'antd';
import TableDemo from "@/pages/antd/components/table";

export default ()=>(

  <div>

    <Breadcrumb separator=">">
      <Breadcrumb.Item>Antd</Breadcrumb.Item>
      <Breadcrumb.Item href="/antd/table">Table</Breadcrumb.Item>
    </Breadcrumb>

    <Divider>Table</Divider>
    <TableDemo />

  </div>
);
