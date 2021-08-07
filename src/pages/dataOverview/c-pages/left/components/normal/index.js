import React,{memo} from 'react';
import {useSelector} from "react-redux";

import {
  Wrapper,
  InfoList
} from './style';

import {
  StandardAndSmartVersion
} from '@/common/data-local';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import buildingIcon from '@/assets/imgs/dataOverview/bulding.png';
import passedIcon from '@/assets/imgs/dataOverview/passed.png';




export default memo(function (props){
  const {content_state} = useSelector(state => ({
    content_state:state.getIn(['dataOverview','content_state'])
  }));
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
                 <div className='title' title={StandardAndSmartVersion[index]}>
                   <img src={index %2 === 0 ? passedIcon :buildingIcon } alt='建设中' />
                   {StandardAndSmartVersion[index]}
                 </div>
                 <div className='count'><span>{item}</span><span>家</span></div>
               </div>
             )
           })
         }
       </div>
     </InfoList>
     {content_state ? <Spin tip="Loading..." indicator={antIcon} /> : '' }
   </Wrapper>
  )
})
