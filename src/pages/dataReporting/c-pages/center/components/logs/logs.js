import React,{memo,useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";


import {
  Wrapper
} from "./style";

import {
  getLogsAction,
  getLogsByProvinceAction,
  getLogsByCityAction,
} from '@/pages/dataReporting/store/actionCreator'

export default memo(function (){


  const {logs,province,city,grade} = useSelector(state => ({
    logs:state.getIn(['dataReporting','logs']),
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city']),
    grade:state.getIn(['dataReporting','grade']),
  }),shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => { // 层级发生改变请求数据
    switch (grade){
      case 2:
        dispatch(getLogsByProvinceAction(province))
        break;
      case 3:
        dispatch(getLogsByCityAction(city))
        break;
      default:
        dispatch(getLogsAction())
        break;
    }
  },[grade])

  return (
   <Wrapper>
     <div id='logs'>
      <div className="title">实时在线操作记录</div>
      <div className="hover"/>
      <div className="logs">
        {
          logs.length ? logs.map((item,index) => {
            return <div className={index %2 ===0 ? 'border log':'log'}
              title={item.org_name+'于：'+item.add_time + '新增病例'}
              key={index}>
              <marquee>
              {item.org_name}于：{item.add_time}新增病例</marquee></div>
          }) : <div className='nodata'>暂无数据</div>
        }
      </div>
     </div>
   </Wrapper>
  )
})
