import React,{memo} from 'react';
import {shallowEqual, useSelector} from "react-redux";

import IndexHeader from '@/components/indexHeader';
import Auth from '@/common/authentication'
import {
  Wrapper
} from './style';
import Left from './c-pages/left';
import Right from './c-pages/right';
import Joined from './c-pages/hospitalJoined';
import SideBar from '@/components/sideBar'
import {Col, Row} from "antd";



export default memo(function () {
  const {grade} = useSelector(state => {
    return {
      grade:state.getIn(['controlIndex','grade']),
      user:state.getIn(['user','user'])
    }
  },shallowEqual);

  return (
    <Wrapper>
      <Auth/>
      <IndexHeader/>
      <Row>
        <Col span={12}>
          {(grade === 1 || grade === 2 || grade === 3) && <Left/>}
          {!(grade === 1 || grade === 2 || grade === 3) && <Joined/>}
        </Col>
        <Col span={12}>
          <Right/>
        </Col>
      </Row>
      <SideBar/>
    </Wrapper>
  )
});
