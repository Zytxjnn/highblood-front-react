import React,{memo} from 'react';

import ReportHeader from '@/components/reportHeader';
import {Wrapper} from './style'
import {Col, Row} from "antd";
import SideBar from '@/components/sideBar';
import Right from  './c-pages/right'

export default memo(function (){
  return (
    <Wrapper>
      <ReportHeader/>
      <Row>
        <Col span={12}>
          zuo
        </Col>
        <Col span={12}>
          <Right/>
        </Col>
      </Row>
      <SideBar/>
    </Wrapper>
  )
});

