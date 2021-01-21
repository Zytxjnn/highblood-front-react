import React,{memo,useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {
  Wrapper
} from './style';
import {
  getHospitalList
} from '@/network/controlIndex';
import {
  getGradeAction,
  getHospitalNameAction,
  getHospitalIdAction
} from '@/pages/controlIndex/store/actionCreator'
import arrow from "@/assets/imgs/medicalConsortium/arrow.png";

export default memo(function DataHeader(){
  const [isShow,setIsShow] = useState(false);
  const [hospitalList,setHospitalList] = useState([]);
  const {grade,hospital_joined_id,hospital_name} = useSelector(state => ({
    grade:state.getIn(['controlIndex','grade']),
    hospital_joined_id:state.getIn(['controlIndex','hospital_joined_id']),
    hospital_name:state.getIn(['controlIndex','hospital_name']),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    getHospitalList(hospital_joined_id).then(res => {
      setHospitalList(res.data.data);
    })
  },[hospital_joined_id]);
  useEffect(() => {
    document.addEventListener('click',() => {
        setIsShow(false);
    },false);
  },[]);

  const onClick = item => {
    dispatch(getGradeAction(5));
    dispatch(getHospitalNameAction(item.hospital_name));
    dispatch(getHospitalIdAction(item.hospital_id));
  };

  const joinedClick = item => {
    dispatch(getGradeAction(4));
  };
  const showDropdown = e => {
    setIsShow(!isShow);
    e.stopPropagation();
  }



  return (
    <Wrapper>
      <div className="list" onClick={(e) => showDropdown(e)} title={hospital_name}>
        <div className="name">
          {grade === 4 ? '医联体' : hospital_name}
        </div>
      </div>
      <img src={arrow}  alt="" onClick={(e) => showDropdown(e)}/>

      {isShow && <div className="dropdow">
       <div onClick={() => joinedClick()} className="dropdow-main">医联体</div>
       {
         hospitalList && hospitalList.map((item,index) => {
            return <div className='dropdow-item'
                        onClick={ () => onClick(item)}
                        key={index}>{item.hospital_name}</div>
         })
       }
     </div>}
    </Wrapper>
  )
})