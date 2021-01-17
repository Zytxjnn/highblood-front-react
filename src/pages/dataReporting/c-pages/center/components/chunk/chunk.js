import React,{memo} from "react";

import {
  Spin
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import {
  ChunkWrapper
} from "./style";

export default memo(function Chunk(props){
  const {text,count,logo} = props;
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <ChunkWrapper>
      <div className="icon">
        <img src={logo} alt=""/>
      </div>
      <div className="info">
        <div className="info-text">{text}</div>
        <div className="info-count"><span>{count}</span>家</div>
      </div>
      {count!==undefined ? '' : <Spin tip="Loading..." indicator={antIcon} />}
    </ChunkWrapper>
  )
})