import React,{memo} from 'react';
import {useSelector} from "react-redux";

import Normal from './components/normal'
import Rank from './components/rank/rank'
import {
  LeftWrapper
} from './style'

export default memo(function Left(){

  const {content} = useSelector(state => ({
    content:state.getIn(['dataOverview','content'])
  }));


  return(
    <LeftWrapper>
      <Normal data={[content.sum_pass_unit_1,
        content.sum_pass_hospital_1,
        content.sum_build_unit_1,
        content.sum_build_hospital_1]} />
      <Rank province={content.pass_hospital_by_province} city={content.pass_hospital_by_city} />
    </LeftWrapper>
  )
});