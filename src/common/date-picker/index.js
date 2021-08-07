import React,{memo,useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from 'moment'

import {
  Wrapper
} from "./style";
import {
  getStartTimeAction
} from '@/pages/controlIndex/store/actionCreator';
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons'

export default memo(function DataHeader(props){
  const {isShow} = props;
  const [currentYear,setCurrentYear] = useState('');
  const [currentMonth,setCurrentMonth] = useState('');
  const monthList = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
  const {start_time} = useSelector(state => ({
    start_time:state.getIn(['controlIndex','start_time']),
    // end_time:state.getIn(['controlIndex','end_time']),
  }))
  const dispatch = useDispatch();
  useEffect(() => {
    // 初始化日期显示
    const year = moment().format('YYYY');
    setCurrentYear(year);
    const month = Number(moment().format('M'));
    setCurrentMonth(month);
    // dispatch(getStartTimeAction(`${year}-${month < 10 ? 0 +''+ month : month}`));
  },[]);


  const selectMonth = (index,e) => {
    const i = index +1;
    setCurrentMonth(i);
    dispatch(getStartTimeAction(`${currentYear}-${i < 10 ? '0'+i : i}`));
    e.stopPropagation();
  };

  const preYear = (e,value) => {

    const preYear  = Number(currentYear) + value;
    setCurrentYear(preYear);
    dispatch(getStartTimeAction(`${preYear}-${currentMonth < 10 ? '0'+currentMonth : currentMonth}`));
    e.stopPropagation();
  }


  return (
    <Wrapper isShow={isShow}>
      <div className="header">
        <LeftOutlined onClick={(e) => {preYear(e,-1)}} />
        <span>{currentYear}年</span>
        <RightOutlined onClick={(e) => {preYear(e,1)}} />
      </div>
      <div className="months">
        {
          monthList.map((item,index) => {
            return <div key={index} className={[index+1 === currentMonth ? 'active month' : 'month']}
              onClick={(e) => {selectMonth(index,e)}}
            >{item}</div>
          })
        }
      </div>
    </Wrapper>
  )
})