import React,{memo,useEffect,} from "react";
import {useDispatch,} from 'react-redux';

import {Row,Col} from 'antd'

import DataHeader from '@/components/dataHeader';
import DataViewCenter from './c-pages/center';

import {
  Wrapper
} from "./style";

import {getContentAction} from './store/actionCreator'

export default memo(function DataOverview(props){

  // const {content} = useSelector(state => ({
  //   content:state.getIn(['dataOverview','content'])
  // }),shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentAction());
  },[dispatch]);

  return (
    <Wrapper>
      <DataHeader />
      <Row>
        <Col span={6}>
          1
        </Col>
        <Col span={12}>
          <DataViewCenter />
        </Col>
        <Col span={6}>
          3
        </Col>
      </Row>
    </Wrapper>
  )
})