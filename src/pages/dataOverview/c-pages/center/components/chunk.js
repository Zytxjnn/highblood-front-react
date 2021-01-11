import React,{memo} from "react";



import {
  ChunkWrapper
} from "./style";

export default memo(function Chunk(props){
  const {text,count,logo} = props;

  return (
    <ChunkWrapper>
      <div className="icon">
        <img src={logo} alt=""/>
      </div>
      <div className="info">
        <div className="info-text">{text}</div>
        <div className="info-count"><span>{count}</span>家</div>
      </div>
    </ChunkWrapper>
  )
})