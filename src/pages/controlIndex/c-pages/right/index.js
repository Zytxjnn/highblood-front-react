import React,{memo,useEffect} from 'react';
import {useSelector} from "react-redux";
import {
  Wrapper
} from './style';
import China from './c-coms/china';
import SubList from './c-coms/subList';
import Hospital from './c-coms/hospitalListByCore'


export default memo(function (){
  const {grade,show_core,user} = useSelector(state => {
    return {
      province:state.getIn(['controlIndex','province']),
      city:state.getIn(['controlIndex','city']),
      grade:state.getIn(['controlIndex','grade']),
      show_core:state.getIn(['controlIndex','show_core']),
      user:state.getIn(['user','user']),
    }
  });


  return (
    <Wrapper>
      {show_core && grade === 1 && user.user_role === 1 && <China/>}
      {show_core && grade !== 1 && <SubList/>}
      {show_core  || <Hospital/>}
    </Wrapper>
  )
});
