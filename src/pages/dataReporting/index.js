import React,{memo,useEffect,} from "react";
import {useDispatch,} from 'react-redux';

import {Row,Col} from 'antd'

import DataHeader from '@/components/dataHeader';
import DataViewCenter from './c-pages/center';
import DataViewLeft from './c-pages/left';
import DataViewRight from './c-pages/right';
import PreBtn from './c-coms/preBtn/preBtn';
import NextBtn from './c-coms/nextBtn/nextBtn';
import SideBar from '@/components/sideBar';

import {
  Wrapper
} from "./style";



export default memo(function DataOverview(props){


  return (
    <Wrapper>
      <DataHeader />
      <Row>
        <Col span={6}>
          <DataViewLeft/>
        </Col>
        <Col span={12}>
          <DataViewCenter />
        </Col>
        <Col span={6}>
          <DataViewRight/>
        </Col>
      </Row>
      <PreBtn/>
      <NextBtn/>
      <SideBar/>
    </Wrapper>
  )
})