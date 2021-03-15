import React,{memo,useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

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

import {
  getGradeAction,
  getProvinceAction,
  getCityAction
} from '@/pages/controlIndex/store/actionCreator'

export default memo(function () {
  const {grade} = useSelector(state => {
    return {
      grade:state.getIn(['controlIndex','grade'])
    }
  },shallowEqual);


  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(getGradeAction(user.user_role));
    dispatch(getProvinceAction(user.province));
    dispatch(getCityAction(user.city));
  },[])







  return (
    <Wrapper>
      <Auth/>
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
