import React,{memo,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Wrapper
} from './style';

import setting from '@/assets/imgs/sideBar/设置.png';
import overview from '@/assets/imgs/sideBar/数据概览.png';
import index from '@/assets/imgs/sideBar/质控指标.png';
import exit from '@/assets/imgs/sideBar/退出.png';

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
      path:'/controlindex',
      img: exit
    }
  ];
  const [state,setState] = useState(false);
  const history = useHistory();
  const onClick = path => {
    history.push(path);
  };
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