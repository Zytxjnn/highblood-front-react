import React,{memo,useEffect,useState,useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
  Wrapper,

} from './style';
import {Progress} from "antd";
import {
  getRankStatAction
} from '@/pages/dataReporting/store/actionCreator';
import {
  getRank,
  getRankByProvince,
  getRankCity
} from '@/network/dataReporting'


export default memo(function (props){

  const indexColor = ['#FFCB3D','#FB28F4','#32D6FF'];
  const [List,setList] = useState({});
  const [Province,setProvince] = useState([]);
  const listRef = useRef();
  const [Count,setCount] = useState(100);
  const {rank_state,province,city,grade,province_city} = useSelector(state => ({
    rank_state:state.getIn(['dataReporting','rank_state']),
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city']),
    grade:state.getIn(['dataReporting','grade']),
    province_city:state.getIn(['dataReporting','province_city']),
  }))

  const dispatch = useDispatch();

  useEffect(() => {
    switch (grade){
      case 2:
        getRankByProvince(province).then(res => {
          setList(res.data.data);
          setProvince(res.data.data.province_data)
        })
        break;
      case 3:
        getRankCity(city).then(res => {
          setList(res.data.data);
        }).catch(err => {
          setList({
            province_data:Province,
            city_data:province_city
          })
        })
        break;
      default:
        getRank().then(res => {
          setList(res.data.data);
        })
        break;
    }
  },[grade])

  const changeRankState = (state) => {
    listRef.current.scrollTop = 0;
    setCount(100);
    dispatch(getRankStatAction(state));
  }

  const onListScorll = e => {
    const scrollTop = e.target.scrollTop;  // 滚动的高度
    const scrollHeight = e.target.scrollHeight;  // 容器总高度
    const clientHeight = e.target.clientHeight; // 容器可视高度
    if(scrollHeight-clientHeight-scrollTop <= 100){
      setCount(Count + 100);
    }
  }

  return (
   <Wrapper>
     <div className="title">填报总数排名
     </div>
     <div className="hover" />
     <div className="list" onScroll={e => onListScorll(e)} ref={listRef}>
       {
         List[rank_state+'_data'] ? List[rank_state+'_data'].map((item,index) => {
           if(index >= Count) return;
           return (
             <div className='item' key={index}>
               <div className="item-area"><span style={{'color':index<=2 ? indexColor[index]:''}}>NO{index+1}.</span>{item.name}</div>
               <div className="item-progress">
                 <Progress percent={item.count}
                           status={"active"}
                           strokeColor={{
                             to:'#0477D5',
                             from:'#01D9FE'
                           }}
                           trailColor='#193F80'
                           showInfo={false}
                 />
                 <div className='score'>{item.count || item.score}</div>
               </div>
             </div>
           )
         }) : <div className='nodata'>暂无数据</div>
       }

     </div>
     <div className="option">
       <div className={rank_state === 'province' ? 'active' : ''} onClick={() => {changeRankState('province')}}>省</div>
       <div className={rank_state === 'city' ? 'active' : ''} onClick={() => {changeRankState('city')}}>市</div>
       <div className={rank_state === 'ylt' ? 'active' : ''} onClick={() => {changeRankState('ylt')}}>医联体</div>
     </div>
   </Wrapper>
  )
})
