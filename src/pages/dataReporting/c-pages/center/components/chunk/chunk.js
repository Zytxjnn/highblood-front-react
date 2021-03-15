import React,{memo} from "react";
import {useSelector} from "react-redux";
import {
  Spin
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import {
  ChunkWrapper
} from "./style";


export default memo(function Chunk(props){
  const {count_state} = useSelector(state => ({
    count_state:state.getIn(['dataReporting','count_state'])
  }))


  const {text,count,logo,flag} = props;
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <ChunkWrapper>
      <div className="icon">
        <img src={logo} alt=""/>
      </div>
      <div className="info">
        <div className="info-text">{text}</div>
        <div className="info-count"><span>{count}</span>{flag ? '家' : '例'}</div>
      </div>

    </ChunkWrapper>
  )
});
