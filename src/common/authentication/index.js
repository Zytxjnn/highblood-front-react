import React,{memo,useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {
  getTokenAction,
  getUserAction
} from '@/pages/login/store/actionCreaetor';
import {
  getGradeAction,
  getProvinceAction,
  getCityAction
} from '@/pages/dataReporting/store/actionCreator'


/*
* 自定义组件 用在在每个一级路由对于组件里，判断是否登录，否则跳转登录页面
* */

export default memo(function Auth(){
  const history = useHistory();
  const dispatch = useDispatch();



  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch(getGradeAction(user.user_role));
      switch (user.user_role){
        case 1:
          dispatch(getGradeAction(1));
          break;
        case 2:
          dispatch(getProvinceAction(user.province));
          break;
        case 3:
          dispatch(getProvinceAction(user.province));
          dispatch(getCityAction(user.city));
          break;
      }

      dispatch(getUserAction(user));
      dispatch(getTokenAction(token));

    }else{
      history.push('/login');
    }
  },[dispatch])

  return (
    <div></div>
  )
});
