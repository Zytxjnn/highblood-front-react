import React,{memo,useEffect,useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";

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
  getProvinceAction,
  getCityAction,
  getGradeAction,
  getHospitalJoinedIdAction,
  getHospitalJoinedNameAction,
} from "@/pages/controlIndex/store/actionCreator";

export default memo(function (){
  const [isShow,setIsShow] = useState('none');
  const [hospitalList,setHospitalList] = useState([]);  // 医院列表
  const [res,setRes] = useState([]);  // 筛选后结果

  const {province,city,grade,user} = useSelector(state => ({
    province:state.getIn(['controlIndex','province']),
    city:state.getIn(['controlIndex','city']),
    grade:state.getIn(['controlIndex','grade']),
    user:state.getIn(['user','user']),
  }),shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    switch (grade){
      default:
        const user_role = JSON.parse(localStorage.getItem('user')).user_role;
        if(user_role !== 1) return;
        getHospitalJoinedList().then(res => {
          setHospitalList(res.data.data);
          setRes(res.data.data);
        })
        break;
      case 2:
        getHospitalJoinedListByProvince(province).then(res => {
          setHospitalList(res.data.data);
          setRes(res.data.data);
        })
        break;
      case 3:
        getHospitalJoinedListByCity(city).then(res => {

          setTimeout(() => {
            setHospitalList(res.data.data);
            setRes(res.data.data);
          },100)
        })
        break;
    }
  },[grade]);

  const onChange = e => { // 输入关键字，筛选医联体
    const value = e.target.value;
    const arr = hospitalList.filter(item => {
      return item.hospital_name.indexOf(value) !== -1;
    })
    setRes(arr);
  };
  useEffect(() => {
    document.addEventListener('click',() => {
      setIsShow('none')
    });

  },[])
  const onFocus = e => {
    setIsShow( 'block');
    e.stopPropagation();
  }

  const onClick = (e,hospital) => { // 进入医联体界面
    dispatch(getGradeAction(4));
    dispatch(getProvinceAction(hospital.province));
    dispatch(getCityAction(hospital.city));
    dispatch(getHospitalJoinedIdAction(hospital.hospital_id));
    dispatch(getHospitalJoinedNameAction(hospital.hospital_name));
    e.stopPropagation();
  }


  return (
    <Wrapper isShow={isShow}  >
      <input className='textinput' type="text" placeholder='请输入医院名称' onChange={e => onChange(e)}
             onClick={(e) => {onFocus(e)}}/>
      <img src={searchBtn} alt="点击搜索"/>
      <div className="hospitalList">
        {
          res && res.map((item,index) => {
            return <div className='hospital' key={index} onClick={(e) => onClick(e,item)} >{item.hospital_name}</div>
          })
        }
      </div>
    </Wrapper>
  )
})
