import React,{memo} from 'react';
import {useSelector} from "react-redux";

import {
  HeaderWrapper
} from './style';
import Date from './c-coms/date';
import Search from './c-coms/search';
import Slider from './c-coms/slider';
import Back from './c-coms/back'
import HospitalList from './c-coms/hospitalList'

import cardioval from '@/assets/imgs/logos/cardioval.png';
import union from '@/assets/imgs/logos/union.png';


export default memo(function DataHeader(){
  const {grade,province,city,hospital_joined_name,hospital_name} = useSelector(state => ({
    province:state.getIn(['controlIndex','province']),
    city:state.getIn(['controlIndex','city']),
    grade:state.getIn(['controlIndex','grade']),
    hospital_joined_name:state.getIn(['controlIndex','hospital_joined_name']),
    hospital_name:state.getIn(['controlIndex','hospital_name']),
  }));

  return (
    <HeaderWrapper>
      <div className='left'>
        <img src={cardioval} alt="" className='logo'  />
        <img src={union} alt="" className='logo'  />
        {
          grade <= 3 ? <div>
            {grade === 1 ? '全国' : grade === 2 ? province : city }高血压达标中心
          </div> : <div>{grade === 4 ? hospital_joined_name+'【医联体】' : hospital_name}</div>
        }
      </div>
     <div className="right">
       <div className="tools">
         {grade >= 4 && <Back/> }
         {grade >= 3 && <Slider/> }
         <Date/>
         {grade <= 3 && <Search/>}
       </div>
       {grade > 3 && <HospitalList/>}
     </div>

    </HeaderWrapper>
  )
})
