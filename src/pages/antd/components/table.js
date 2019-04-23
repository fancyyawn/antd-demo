/* eslint-disable */
import React, {useState} from 'react'
import {Table, Tag, Divider} from 'antd'

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
  description: 'bababab babab, Lake Park',
  tel: '0571-22098909',
  phone: 18889898989,
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
  description: 'bababab babab, Lake Park',
  tel: '0571-22098909',
  phone: 18889898989,
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
  description: 'bababab babab, Lake Park',
  tel: '0571-22098909',
  phone: 18889898989,
}, {
  key: '4',
  name: 'Joe Black2',
  age: 33,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
  description: 'bababab babab, Lake Park',
  tel: '0571-22098909',
  phone: 18889898989,
}];


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:">{text}</a>,
  sorter: (a, b) => a.name.length - b.name.length,
  sortDirections: ['descend'],
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.address.indexOf(value) === 0,
  sorter: (a, b) => a.address.length - b.address.length,
  sortDirections: ['descend', 'ascend'],
},
  {
    title: 'Tel',
    colSpan: 2,
    dataIndex: 'tel',
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
  },
  {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
      })}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
    fixed: 'right',
    width: 300,
  render: (text, record) => (
    <span>
      <a href="javascript:">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:">Delete</a>
    </span>
  ),
}];

const TableDemo = ()=> {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const expandedRowRender = record =>
    <p style={{ margin: 0 }}>{record.description}</p>;

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedRowKeys(selectedRowKeys);
    },
    getCheckboxProps: record => ({
      // disabled: record.name === 'Jim Green',
      name: record.name,
    }),
    hideDefaultSelections: true,
    selections: [{
      key: 'all-data',
      text: 'Select All Data',
      onSelect: (changeableRowKeys) => setSelectedRowKeys([...changeableRowKeys])
    }, {
      key: 'odd',
      text: 'Select Odd Row',
      onSelect: (changeableRowKeys) => setSelectedRowKeys(changeableRowKeys.filter((key, index) => index % 2 === 0)),
    }, {
      key: 'even',
      text: 'Select Even Row',
      onSelect: (changeableRowKeys) => setSelectedRowKeys(changeableRowKeys.filter((key, index) => index % 2 !== 0)),
    }],
  };


  return <div id='table'>
    <Table
      columns={columns}
      expandedRowRender={expandedRowRender}
      dataSource={data}
      rowSelection={rowSelection}
      bordered
      title={() => 'Header'}
      footer={() => 'Footer'}
      scroll={{ x: 1300}}
    />
  </div>
};

export default TableDemo;
