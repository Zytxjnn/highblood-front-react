import React,{memo} from 'react';
import {useDispatch} from "react-redux";

import {
  Wrapper
} from './style';

import {getGradeAction} from "@/pages/controlIndex/store/actionCreator";



export default memo(function DataHeader(){
  const dispatch = useDispatch();

  const back = () => {
    dispatch(getGradeAction(1));
  }

  return (
    <Wrapper>
      <div onClick={() => back()}>返回</div>
    </Wrapper>
  )
})
