import React,{memo,useEffect} from 'react';

import {
  Wrapper,
  InfoList
} from './style';

import {
  StandardAndSmartVersion
} from '@/common/data-local';
import buildingIcon from '@/assets/imgs/dataOverview/bulding.png';
import passedIcon from '@/assets/imgs/dataOverview/passed.png';



export default memo(function (props){
  const {data} = props;
  return (
   <Wrapper>
     <div className="title">标准版认证情况</div>
     <div className="hover" />
     <InfoList>
       <div className="info-list">
         {
           data.map((item,index) => {
             return (
               <div className='info-item' key={index}>
                 <div className='title'>
                   <img src={index %2 === 0 ? passedIcon :buildingIcon } alt='建设中' />
                   {StandardAndSmartVersion[index]}
                 </div>
                 <div className='count'><span>{item}</span>家</div>
               </div>
             )
           })
         }
       </div>
     </InfoList>
   </Wrapper>
  )
})