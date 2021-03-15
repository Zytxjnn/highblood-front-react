import React,{memo} from 'react';

import {
  HeaderWrapper
} from './style';
import Moment from './c-coms/date'
import {useSelector} from "react-redux";

import cardioval from '@/assets/imgs/logos/cardioval.png';
import union from '@/assets/imgs/logos/union.png';


export default memo(function DataHeader(){
  const {grade,province,city} = useSelector(state => ({
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city']),
    grade:state.getIn(['dataReporting','grade']),
  }));

  return (
    <HeaderWrapper>
      <img src={cardioval} alt="" className='logo'  />
      <img src={union} alt="" className='logo'  />
      <div>{grade === 1 ? '全国' : grade === 2 ? province : city }高血压达标中心质控管理平台</div>
      <Moment/>
    </HeaderWrapper>
  )
})
