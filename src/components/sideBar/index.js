import React,{memo,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {
  Wrapper
} from './style';
import {
  Modal,
  message
} from 'antd';

import {
  removeTokenAction, removeUserAction
} from '@/pages/login/store/actionCreaetor';
import {
  getGradeAction,
  getProvinceAction,
  getCityAction
} from '@/pages/dataReporting/store/actionCreator'
import  {
  getLogineAction
} from "@/pages/login/store/actionCreaetor";

import setting from '@/assets/imgs/sideBar/设置.png';
import overview from '@/assets/imgs/sideBar/数据概览.png';
import index from '@/assets/imgs/sideBar/质控指标.png';
import exit from '@/assets/imgs/sideBar/退出.png';

const {confirm} = Modal

export default memo(function DataHeader(){
  const data = [
    {

      title:'数据概览',
      path:'/',
      img:setting
    },
    {

      title:'质控指标',
      path:'/controlindex',
      img: overview
    },
    {

      title:'设置',
      path:'/controlindex',
      img: index
    },
    {

      title:'退出登录',
      path:'/logout',
      img: exit
    }
  ];
  const [state,setState] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();


  const onClick = path => {
    if(path === '/logout'){
      confirm({
        icon: '',
        content: '确认退出当前账号吗',
        onOk(){
          logout();
        },
        okText:'确认',
        cancelText:'取消'
      });
      return false;
    }
    history.push(path);
  };

  const logout = () => {
      message.success('退出登录成功')
      history.push('/login');
      dispatch(removeTokenAction());
      dispatch(removeUserAction());
      dispatch(getGradeAction(1));
      dispatch(getProvinceAction(''));
      dispatch(getCityAction(''));

  }

  return (
    <Wrapper state={state}>
      {
        <div className="views">
          {
            data.map((item,index) => {
              return (
                <div className="view" onClick={() => onClick(item.path)} key={index}>
                  <img src={item.img} alt={item.title} />
                  <div className="text">{item.title}</div>
                </div>
              )
            })
          }
        </div>
      }
      <div className="close" onClick={() => setState(!state)}>
        {!state ?  <span className="iconfont icon-gengduo" /> : <span className="iconfont icon-xiangzuo" />}
      </div>
    </Wrapper>
  )
})
