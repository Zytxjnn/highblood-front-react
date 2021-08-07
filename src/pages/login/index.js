import React,{memo,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import LoginHeader from './c-coms/loginHeader/loginHeader';
import LoginBody from './c-coms/loginBody/body';
import {getTokenAction, getUserAction} from "@/pages/login/store/actionCreaetor";
import {getLoginAction} from "@/pages/login/store/actionCreaetor";
import {useDispatch} from "react-redux";


export default memo(function (){
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // 已登录，跳转首页
    if(token){
      history.push('/');
    }else{  // 退出登录后重置登录相关信息
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('password');
      localStorage.removeItem('username');
      dispatch(getLoginAction(false))
      dispatch(getTokenAction(''));
      dispatch(getUserAction({}));
    }

  });

  return <>
    <LoginHeader/>
    <LoginBody/>
  </>
});

