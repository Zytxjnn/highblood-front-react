import React,{memo,useEffect,useState} from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {
  Wrapper,
  Chunk
} from './style';
import {
  getScoreListByJoined,
  getScoreListByHospital
} from '@/network/controlIndex';
import controlScore from '@/assets/imgs/medicalConsortium/controlScore.png';
import rank1 from '@/assets/imgs/medicalConsortium/rank1.png';
import rank2 from '@/assets/imgs/medicalConsortium/rank2.png';


export default memo(function (){
  const [scoreInfo,setScoreInfo] = useState({});
  const {grade,hospital_joined_id,hospital_id,start,end} = useSelector(state => {
    return {
      grade:state.getIn(['controlIndex','grade']),
      hospital_joined_id:state.getIn(['controlIndex','hospital_joined_id']),
      hospital_id:state.getIn(['controlIndex','hospital_id']),
      start:state.getIn(['controlIndex','start_time']),
      end:state.getIn(['controlIndex','end_time']),
    }
  },shallowEqual);
  useEffect(() => {
    switch (grade){
      case 4:
        getScoreListByJoined(start,end,hospital_joined_id).then(res => {
          setScoreInfo(res.data.data[0]);
        })
        break;
      case 5:
        getScoreListByHospital(start,end,hospital_id).then(res => {
          setScoreInfo(res.data.data[0]);
        })
        break;
      default:break;
    }
  },[grade]);

  return (
    <Wrapper>
      <Chunk bg={controlScore}>
        <div className="item-name">质控评分</div>
        <div className="item-value">{scoreInfo.score ?? '无数据'}</div>
      </Chunk>
      <Chunk bg={rank1}>
        <div className="item-name">省排名</div>
        <div className="item-value">{scoreInfo.province_rank ?? '暂无数据'}</div>
      </Chunk>
      <Chunk bg={rank1}>
        <div className="item-name">市排名</div>
        <div className="item-value">{scoreInfo.city_rank ?? '暂无数据'}</div>
      </Chunk>
      <Chunk bg={rank2}>
        <div className="item-name">全国排名</div>
        <div className="item-value">{scoreInfo.country_rank ?? '暂无数据'}</div>
      </Chunk>
    </Wrapper>
  )
});