import React,{memo} from "react";
import {useSelector} from "react-redux";
import {
  ChunkWrapper
} from "./style";
import {
  Spin
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


export default memo(function Chunk(props){
  const {content_state} = useSelector(state => ({
    content_state:state.getIn(['dataOverview','content_state'])
  }));
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
      {content_state ? <Spin tip="Loading..." indicator={antIcon} /> : '' }
    </ChunkWrapper>
  )
})