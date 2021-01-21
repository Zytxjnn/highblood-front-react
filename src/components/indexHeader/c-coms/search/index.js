import React,{memo,useEffect,useState} from 'react'
import {shallowEqual, useSelector} from "react-redux";

import {
  Wrapper
} from './style';
import searchBtn from '@/assets/imgs/qualityIndicators/search-hospital.png'

import {
  getHospitalJoinedList,
  getHospitalJoinedListByProvince,
  getHospitalJoinedListByCity
} from '@/network/controlIndex';
import {
  getSearchHospital
} from '@/network/controlIndex'

export default memo(function (){
  const [isShow,setIsShow] = useState('none');
  const [hospitalList,setHospitalList] = useState([]);

  const {province,city,grade} = useSelector(state => ({
    province:state.getIn(['controlIndex','province']),
    city:state.getIn(['controlIndex','city']),
    grade:state.getIn(['controlIndex','grade']),
  }),shallowEqual);

  useEffect(() => {
    switch (grade){
      default:
        getHospitalJoinedList().then(res => {
          setHospitalList(res.data.data);
        })
        break;
      case 2:
        getHospitalJoinedListByProvince(province).then(res => {
          setHospitalList(res.data.data);
        })
        break;
      case 3:
        getHospitalJoinedListByCity(city).then(res => {
          setHospitalList(res.data.data);
        })
        break;
    }
  },[grade]);



  const onChange = e => {
    const value = e.target.value;
    getSearchHospital(grade,value).then(res => {
      setHospitalList(res.data.data);
    })
  };

  const onFocus = (e) => {
    setIsShow( 'block');
    e.stopPropagation();
  }
  const onblur = (e) => {
    setIsShow( 'none');
    e.stopPropagation();
  }


  return (
    <Wrapper isShow={isShow}  >
      <input className='textinput' type="text" placeholder='请输入医院名称' onChange={e => onChange(e)}
             onFocus={(e) => {onFocus(e)}}
             onBlur={(e) => {onblur(e)}}
/>
      <img src={searchBtn} alt="点击搜索"/>
      <div className="hospitalList">
        {
          hospitalList && hospitalList.map((item,index) => {
            return <div className='hospital' key={index}>{item.hospital_name}</div>
          })
        }
      </div>
    </Wrapper>
  )
})
