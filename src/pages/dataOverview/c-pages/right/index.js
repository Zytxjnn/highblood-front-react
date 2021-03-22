import React,{memo} from 'react';
import {useSelector} from "react-redux";

import Normal from './components/normal'
import Bing from './components/bing/bing'
import {
  LeftWrapper
} from './style'

export default memo(function Left(){

  const {content} = useSelector(state => ({
    content:state.getIn(['dataOverview','content'])
  }));


  return(
    <LeftWrapper>
      <Normal data={[content.sum_pass_unit_2,
        content.sum_build_unit_2,
        content.sum_pass_hospital_2,
        content.sum_build_hospital_2]} />
      <Bing data={content.bing_content} />
    </LeftWrapper>
  )
});
