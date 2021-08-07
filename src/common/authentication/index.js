import React,{memo,useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {
  getLoginAction,
  getTokenAction,
  getUserAction
} from '@/pages/login/store/actionCreaetor';
import {
  getGradeAction,
  getProvinceAction,
  getCityAction
} from '@/pages/dataReporting/store/actionCreator';

import {
  getGradeAction as getGradeAction2,
  getProvinceAction as getProvinceAction2,
  getCityAction as getCityAction2
} from '@/pages/controlIndex/store/actionCreator'


/*
* 自定义组件 用在在每个一级路由对于组件里，判断是否登录，否则跳转登录页面
* */

export default memo(function Auth(){
  const history = useHistory();
  const dispatch = useDispatch();
  const {login} = useSelector(state => ({
    login:state.getIn(['user','login'])
  }))



  useEffect(() => {
    const token = localStorage.getItem('token');

    if (login){ // 已鉴权过，不在鉴权
      return false;
    }

    if(token){
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch(getGradeAction(user.user_role));
      dispatch(getGradeAction2(user.user_role));
      switch (user.user_role){
        case 1:
          dispatch(getLoginAction(true))
          dispatch(getGradeAction(1));
          dispatch(getGradeAction2(1));
          break;
        case 2:
          dispatch(getProvinceAction(user.province));
          dispatch(getProvinceAction2(user.province));
          break;
        case 3:
          dispatch(getProvinceAction(user.province));
          dispatch(getProvinceAction2(user.province));
          dispatch(getCityAction(user.city));
          dispatch(getCityAction2(user.city));
          break;
      }

      dispatch(getUserAction(user));
      dispatch(getTokenAction(token));
      dispatch(getLoginAction(true))  // 鉴权成功

    }else{
      history.push('/login');
    }
  },[dispatch])

  return (
    <div></div>
  )
});
