import React,{memo} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
  Wrapper
} from './style';

import {
  getGradeAction,
  getProvinceAction,
  getCityAction
} from "@/pages/controlIndex/store/actionCreator";



export default memo(function DataHeader(){
  const dispatch = useDispatch();
  const {user} = useSelector(state => ({
    user:state.getIn(['user','user']),
  }));
  const back = () => {
    const {user_role,province,city} = user;
    console.log(user_role)
    switch (user_role){
      case 1:
        dispatch(getGradeAction(1));
        break;
      case 2:
        dispatch(getGradeAction(2));
        dispatch(getProvinceAction(province));
        break;
      case 3:
        dispatch(getGradeAction(3));
        dispatch(getCityAction(city));
        break;
    }
    // dispatch(getGradeAction(1));
  }

  return (
    <Wrapper>
      <div onClick={() => back()}>返回</div>
    </Wrapper>
  )
})
