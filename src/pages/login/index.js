import React,{memo,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";



import LoginHeader from './c-coms/loginHeader/loginHeader';
import SideBar from '@/components/sideBar';
import LoginBody from './c-coms/loginBody/body';


export default memo(function (){
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // 已登录，跳转首页
    if(token){
      history.push('/');
    }

  });

  return <>
    <LoginHeader/>
    <LoginBody/>
    <SideBar/>
  </>
});

