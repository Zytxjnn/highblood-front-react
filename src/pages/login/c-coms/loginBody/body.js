import React,{memo,useState,useEffect,useRef} from 'react';
import {useHistory} from "react-router";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {
  Wrapper
} from './style';
import {
  Form,
  Input,
  Button,
  message,
  Checkbox
} from 'antd';

import {
  loginByRegionAccount
} from '@/network/login';

import {
  getTokenAction,
  getUserAction
} from '@/pages/login/store/actionCreaetor';



export default memo(function DataHeader(){
  const history = useHistory();
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();


  // const {account} = useSelector(state => {
  //   return {
  //     account:state.getIn(['user','account']),
  //
  //   }
  // },shallowEqual);


  const tailLayout = {
    wrapperCol: { offset: 10, span: 16 },
  };

  const [username,setUserName] = useState('testsuzhou');
  const [password,setPassword] = useState('admin123456');
  const [remember,setRemember] = useState(true)

  // useEffect(() => {
  //     const username = localStorage.getItem('username');
  //     const password = localStorage.getItem('password');
  //     setUserName(username)
  //     setPassword(password)
  // },[]);
  //
  //
  // useEffect(() => {
  //   usernameRef.current.input.value = username;
  // },[username]);
  // useEffect(() => {
  //   passwordRef.current.input.value = password;
  // },[password]);


  const submit = () => {
     if(username && password){
       loginByRegionAccount(username,password).then(res => {
          const data = res.data;
          switch (data.code){
            case 101:
              message.warn(data.message)
              break;
            case 200: //  登录成功
              dispatch(getTokenAction(data.data.token));  // redux存储token
              dispatch(getUserAction(data.data)); // redux存储用户信息
              // localStorage.setItem('username',username);
              // localStorage.setItem('password',password);
              // remember && dispatch(getAccountAction({username,password}))
              message.success(data.message);
              history.push('/');
          }
       })
     }
  };




  const change1 = e => {
    setUserName(e.target.value);
  }
  const change2 = e => {
    setPassword(e.target.value);
  }
  const changeRem = () => {
    setRemember(!remember)
  }

  return (
    <Wrapper>
      <div className="form">
        <div className='title'>账号登录</div>
        <Form>
          <Form.Item label="账号" name="username"  colon={false}  rules={[{ required: true, message: '请输入密码' }]}>
            <Input  allowClear  size='large'  ref={usernameRef} placeholder='请输入账户' onChange={(e) => {change1(e)}} />
          </Form.Item>
          <Form.Item label="密码" name="password"  colon={false}  rules={[{ required: true, message: '请输入账号' }]}>
            <Input.Password size='large' ref={passwordRef} placeholder='请输入密码' onChange={(e) => {change2(e)}} />
          </Form.Item>
          <Form.Item>
            {/*<Checkbox checked={remember} onChange={() => changeRem()}>记住密码</Checkbox>*/}
            <span className='forget-psd'>忘记密码</span>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" size='large'  htmlType='submit' onClick={() => submit()}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  )
});
