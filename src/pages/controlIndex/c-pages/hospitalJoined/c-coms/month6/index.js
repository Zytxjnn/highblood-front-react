import React,{memo,useEffect,useState} from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {
  Wrapper
} from './style';
import {
  getMonth6ByOrg,
  getMonth6ByHospital
} from '@/network/controlIndex';
import { Progress } from 'antd';

import total from '@/assets/imgs/medicalConsortium/total.png'
import up from '@/assets/imgs/medicalConsortium/up.png'
import recent from '@/assets/imgs/medicalConsortium/recent.png'

export default memo(function (){
  const [data,setData] = useState({});
  const colorList= ['#60c2e2','#284df3','#6034db','#c138ea','#60c2e2','#284df3'];
  const {grade,hospital_joined_id,hospital_id} = useSelector(state => ({
    grade:state.getIn(['controlIndex','grade']),
    hospital_joined_id:state.getIn(['controlIndex','hospital_joined_id']),
    hospital_id:state.getIn(['controlIndex','hospital_id']),
  }),shallowEqual);

  useEffect(() => {
    switch (grade){
      case 4:
        getMonth6ByOrg(hospital_joined_id).then(res => {
          setData(res.data.data)
        })
        break;
      case 5:
        getMonth6ByHospital(hospital_id).then(res => {
          setData(res.data.data)
        })
        break;
      default:break;
    }
  },[grade]);



  return (
    <Wrapper>
      <div className="title">近六月填报趋势</div>
      <div className="progress-list">
        {
          data.recent_month && data.recent_month.map((item,index) => {
            return <div className='progress' key={index}>
              <div className='progress-month'>{item.name}</div>
              <Progress percent={item.count} size="small"
                        format={percent => percent}
                        strokeWidth={'20px'}
                        strokeColor={colorList[index]}/>
            </div>
          })
        }
      </div>
      <div className="total">
        <img src={total} alt="累计填报量"/>
        <div className='text'>累计填报量</div>
        <div className="count">{data.all_count}</div>
        <img src={up} alt="上升"/>
      </div>
      <div className="recent">
        <div className="item">
          <img src={recent} alt="今日填报量"/>
          <div className='right'>
            <div className="right-count">{data.today_count}</div>
            <div className="right-text">今日填报量</div>
          </div>
        </div>
        <div className="item">
          <img src={recent} alt="近六月填报量"/>
          <div className='right'>
            <div className="right-count">{data.recent_count}</div>
            <div className="right-text">近六月填报量</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
});