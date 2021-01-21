import React,{memo} from 'react';

import {
  Wrapper
} from './style';
import ScoreInfo from './c-coms/scoreInfo';
import TimeInfo from './c-coms/timeInfo';
import ScoreList from './c-coms/scoreList'
import Month6 from './c-coms/month6';

export default memo(function (){
  return (
    <Wrapper>
      <ScoreInfo/>
      <TimeInfo/>
      <div className='charts'>
        <ScoreList/>
        <Month6/>
      </div>
    </Wrapper>
  )
});