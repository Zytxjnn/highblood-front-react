import React,{memo} from 'react';

import IndexHeader from '@/components/indexHeader'
import {
  Wrapper
} from './style';
import Left from './c-pages/left';
import Right from './c-pages/right';
import Joined from './c-pages/hospitalJoined';
import SideBar from '@/components/sideBar'
import {Col, Row} from "antd";
import {shallowEqual, useSelector} from "react-redux";

export default memo(function () {
  const {grade} = useSelector(state => {
    return {
      grade:state.getIn(['controlIndex','grade']),
    }
  },shallowEqual);

  return (
    <Wrapper>
      <IndexHeader/>
      <Row>
        <Col span={12}>
          {(grade === 1 || grade === 2 || grade === 3) && <Left/>}
          {!(grade === 1 || grade === 2) && <Joined/>}
        </Col>
        <Col span={12}>
          <Right/>
        </Col>
      </Row>
      <SideBar/>
    </Wrapper>
  )
});