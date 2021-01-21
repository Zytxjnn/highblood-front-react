import React,{memo,useEffect,useState} from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {
  Wrapper,
  Chunk
} from './style';
import {
  getTimeInfoByHospitalJoined
} from '@/network/controlIndex';
import register from '@/assets/imgs/medicalConsortium/register.png';
import pass from '@/assets/imgs/medicalConsortium/pass.png';
import again from '@/assets/imgs/medicalConsortium/again.png';


export default memo(function (){
  const [timeInfo,setTimeInfo] = useState({});
  const {grade,hospital_joined_name,hospital_name} = useSelector(state => ({
      grade:state.getIn(['controlIndex','grade']),
      hospital_joined_name:state.getIn(['controlIndex','hospital_joined_name']),

      hospital_name:state.getIn(['controlIndex','hospital_name']),
  }),shallowEqual);
  useEffect(() => {
    switch (grade){
      case 4:
        getTimeInfoByHospitalJoined(hospital_joined_name).then(res => {
          setTimeInfo(res.data.content);
        })
        break;
      case 5:
        getTimeInfoByHospitalJoined(hospital_name).then(res => {
          setTimeInfo(res.data.content);
        })
        break;
      default:break;
    }
  },[grade]);


  return (
    <Wrapper>
      <Chunk>
        <div className="item-icon">
          <img src={register} className='icon' alt="注册时间"/>
        </div>
        <div className="item-info">
          <div className="item-title">注册时间</div>
          <div className="item-value">
            <span className="value">{timeInfo && timeInfo.register_time}</span>
          </div>
        </div>
      </Chunk>
      <Chunk>
        <div className="item-icon">
          <img src={pass} className='icon' alt="通过认证时间"/>
        </div>
        <div className="item-info">
          <div className="item-title">通过认证时间</div>
          <div className="item-value">
            <span className="value">{timeInfo && timeInfo.pass_time}</span>
          </div>
        </div>
      </Chunk>
      <Chunk>
        <div className="item-icon">
          <img src={again} className='icon' alt="再认证倒计时"/>
        </div>
        <div className="item-info">
          <div className="item-title">再认证倒计时</div>
          <div className="item-value">
            <span className="value">{timeInfo && timeInfo.again_time}</span>
          </div>
        </div>
      </Chunk>
    </Wrapper>
  )
});