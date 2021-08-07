import React,{memo} from 'react';
import {useSelector} from "react-redux";

import {Wrapper} from './style';

export default memo(function (){
  const {grade,province,city} = useSelector(state => ({
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city']),
    grade:state.getIn(['dataReporting','grade']),
  }));

  return (
    <Wrapper>
      <div>{grade === 1 ? '全国' : grade === 2 ? province : city }胸痛中心质控报告</div>
    </Wrapper>
  )
});

