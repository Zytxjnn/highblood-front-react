import React,{memo} from 'react';

import {Wrapper} from "./style";
import cardioval from '@/assets/imgs/logos/cardioval.png';


export default memo(function (){

  return (
    <Wrapper>
      <div className='logo'><img src={cardioval} alt={'cardioval'} /></div>
      <div className='title'>
        <div className='title-zh'>全国高血压质控管理平台</div>
        <div className='title-en'>Quality Control and Management Platform of China Chest Pain Center</div>
      </div>
    </Wrapper>
  )
});

