import React,{memo,useEffect} from 'react';

import {jsPDF} from 'jspdf';
import html2canvas from  'html2canvas';
import { Table, Tag, Space } from 'antd';

import {Wrapper} from './style';
export default memo(function(){
  const columns = [
    {
      title: '指标名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '达标数量',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '去年同期达标数量',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '去年同期占比',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '是否达标',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  useEffect(() => {

      const PDF = new jsPDF();
      const body = document.querySelector('#wrapper');
      html2canvas(body, {
        // allowTaint: true
        allowTaint: true,
        taintTest: false,

      }).then(function (canvas1) {
        let contentWidth = canvas1.width
        let contentHeight = canvas1.height

        var pageData = canvas1.toDataURL('image/jpeg', 1.0);
        console.log(contentWidth,contentHeight)


          PDF.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight)

        PDF.save('a.pdf')
      })

  },[]);


  return (
    <Wrapper>
     <div id="wrapper">
       <Table columns={columns} dataSource={data} />
       <Table columns={columns} dataSource={data} />
       <Table columns={columns} dataSource={data} />
       <Table columns={columns} dataSource={data} />
       <Table columns={columns} dataSource={data} />
       <Table columns={columns} dataSource={data} />
       <Table columns={columns} dataSource={data} />
       <Table columns={columns} dataSource={data} />
     </div>
    </Wrapper>
  )
});
