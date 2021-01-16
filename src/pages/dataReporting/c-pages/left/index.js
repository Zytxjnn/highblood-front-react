import React,{memo} from 'react';
import {useSelector} from "react-redux";

import State from './components/state/state'
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
      <State />
      <Rank province={content.pass_hospital_by_province} city={content.pass_hospital_by_city} />
    </LeftWrapper>
  )
});