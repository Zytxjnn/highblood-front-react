import React,{memo,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Slider} from "antd";

import {
  Wrapper
} from './style';

import {
  getCompGradeAction
} from "@/pages/controlIndex/store/actionCreator";

export default memo(function DataHeader(){
  const marks1 = {
    1:'国内对比',
    2:'省内对比',
  }
  const marks2 = {
    1:'国内对比',
    2:'省内对比',
    3:'市区对比',
  }

  const {grade,province,city,hospital_joined_name,hospital_name} = useSelector(state => ({
    province:state.getIn(['controlIndex','province']),
    city:state.getIn(['controlIndex','city']),
    grade:state.getIn(['controlIndex','grade']),
    hospital_joined_name:state.getIn(['controlIndex','hospital_joined_name']),
    hospital_name:state.getIn(['controlIndex','hospital_name']),
  }));
  const dispatch = useDispatch();
  const onChange = (value) => {
    dispatch(getCompGradeAction(value))
  }

  return (
    <Wrapper grade={grade === 3}>
      {
        grade === 3 ? <Slider marks={marks1} defaultValue={1} max={2} min={1} tooltipVisible={false} onChange={(e) => onChange(e)} /> :
          <Slider marks={marks2} defaultValue={1} max={3} min={1} tooltipVisible={false} onChange={(e) => onChange(e)} />
      }

    </Wrapper>
  )
})