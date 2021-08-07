import React,{memo,useState,useEffect} from 'react';
import {useSelector} from "react-redux";

import {
  Wrapper
} from "./style";
import DatePicker from '@/common/date-picker'
import date from '@/assets/imgs/qualityIndicators/date.png'

export default memo(function DataHeader(){
  const [isShow,setIsShow] = useState('none');
  const {start,end} = useSelector(state => ({
    start:state.getIn(['controlIndex','start_time']),
    end:state.getIn(['controlIndex','end']),
  }));

  useEffect(() => {
    document.addEventListener('click',() => {
      setIsShow('none')
    })
  },[])

  const changeIsShow = (e) => {
    if (isShow === 'none'){
      setIsShow( 'block');
    }else{
      setIsShow( 'none');
    }
    e.stopPropagation()
  }

  return (
    <Wrapper>
      <div className="date" onClick={(e) =>{changeIsShow(e)} } >{start}</div>
      <img src={date} onClick={(e) => {changeIsShow(e)}} alt=""/>
      <DatePicker isShow={isShow} />
    </Wrapper>
  )
})