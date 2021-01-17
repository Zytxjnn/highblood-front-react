import React,{memo,useEffect,useState} from 'react';

import { Progress } from 'antd'
import {
  Wrapper,
} from './style';


export default memo(function (props){
  const [state,setState] = useState(0);
  const indexColor = ['#FFCB3D','#FB28F4','#32D6FF'];
  let data = [];
  let {province,city} = props;



  data = state ? city : province || [];

  return (
    <Wrapper>
      <div className="title">通过认证数量排名</div>
      <div className="hover" />
      <div className="list">
        {
          data.map((item,index) => {
            return (
              <div className='item' key={item.province}>
                <div className="item-area"><span style={{'color':index<=2 ? indexColor[index]:''}}>NO{index+1}.</span>{item.province}</div>
                <div className="item-progress">
                  <Progress percent={item.num}
                            status={"active"}
                            strokeColor={{
                              to:'#0477D5',
                              from:'#01D9FE'
                            }}
                            trailColor='#193F80'
                            showInfo={false}
                  />
                  <div className="score">{item.num}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="option">
        <div className={!state ? 'active' : ''} onClick={() => {setState(0)}}>省</div>
        <div className={state ? 'active' : ''} onClick={() => {setState(1)}}>市</div>
      </div>
    </Wrapper>
  )
})