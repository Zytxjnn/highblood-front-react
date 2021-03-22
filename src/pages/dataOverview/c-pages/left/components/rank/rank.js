import React,{memo,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Progress } from 'antd'
import {
  Wrapper,
} from './style';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {getRankStateAction} from "@/pages/dataOverview/store/actionCreator";


export default memo(function (props){
  const dispatch = useDispatch();
  const {content_state,rank_state} = useSelector(state => ({
    content_state:state.getIn(['dataOverview','content_state']),
    rank_state:state.getIn(['dataOverview','rank_state']),
  }));
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const indexColor = ['#FFCB3D','#FB28F4','#32D6FF'];
  let data = [];
  let {province,city} = props;
  data = rank_state ? city : province || [];
  return (
    <Wrapper>
      <div className="title">通过认证数量排名</div>
      <div className="hover" />
      <div className="list">
        {
          data.length ? data.map((item,index) => {
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
          }) : <div className="nodata">暂无数据</div>
        }

      </div>
      <div className="option">
        <div className={!rank_state ? 'active' : ''} onClick={() => {dispatch(getRankStateAction(0))}}>省</div>
        <div className={rank_state ? 'active' : ''} onClick={() => {dispatch(getRankStateAction(1))}}>市</div>
      </div>
      {content_state ? <Spin tip="Loading..." indicator={antIcon} /> : '' }
    </Wrapper>
  )
})
