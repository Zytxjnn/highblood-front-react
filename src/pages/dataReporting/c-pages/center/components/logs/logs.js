import React,{memo,useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";


import {
  Wrapper
} from "./style";

import {
  getLogsAction,
  getLogsByProvinceAction,
  getLogsByCityAction
} from '@/pages/dataReporting/store/actionCreator'

export default memo(function (){


  const {logs,province,city} = useSelector(state => ({
    logs:state.getIn(['dataReporting','logs']),
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city'])
  }),shallowEqual);


  const dispatch = useDispatch();


  useEffect(() => {

    province ? dispatch(getLogsByProvinceAction(province)) : dispatch(getLogsAction());
  },[province]);
  useEffect(() => {
    city &&  dispatch(getLogsByCityAction(city));
    (city === '' && province) && dispatch(getLogsByProvinceAction(province))
  },[city])

  return (
   <Wrapper>
     <div id='logs'>
      <div className="title">实时在线操作记录</div>
      <div className="hover"/>
      <div className="logs">
        {
          logs && logs.map((item,index) => {
            return <div className={index %2 ===0 ? 'border log':'log'}
              title={item.org_name+'于：'+item.add_time + '新增病例'}
              key={index}>
              {item.org_name}于：{item.add_time}新增病例</div>
          })


        }
      </div>
     </div>
   </Wrapper>
  )
})