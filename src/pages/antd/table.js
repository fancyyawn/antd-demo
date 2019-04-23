import React from 'react'
import {Breadcrumb, Divider} from 'antd';
import TableDemo from "@/pages/antd/components/table";
import TableTreeDemo from "@/pages/antd/components/tableTree";

export default ()=>(

  <div>

    <Breadcrumb separator=">">
      <Breadcrumb.Item href="/">Antd</Breadcrumb.Item>
      <Breadcrumb.Item href="/antd/table">Table</Breadcrumb.Item>
    </Breadcrumb>

    <Divider>Table</Divider>
    <TableDemo />
    <TableTreeDemo />

  </div>
);
