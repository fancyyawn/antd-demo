import React from 'react'
import {Breadcrumb, Divider} from 'antd';
import CommentDemo from "@/pages/antd/components/comment";

export default ()=>(

  <div>

    <Breadcrumb separator=">">
      <Breadcrumb.Item href="/">Antd</Breadcrumb.Item>
      <Breadcrumb.Item href="/antd/comment">comment</Breadcrumb.Item>
    </Breadcrumb>

    <Divider>Comment</Divider>
    <CommentDemo />

  </div>
);
