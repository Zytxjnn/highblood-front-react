import styled from "styled-components";

import searchInput from '@/assets/imgs/qualityIndicators/search-input.png'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .list{
    position: relative;
    display: flex;
    align-items: center;
    width: 20vh;
    height: 5vh;
    color: #008599;
    font-weight: 800;
    font-size: 1rem;
    border-radius: 1vw;
    padding-right:2vw;
    padding-left: 1vw;
    cursor: pointer;
    user-select: none;
    background-image: url(${searchInput});
    background-size: 100% 100%;
    
    .name{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }


  img{

    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  
  .dropdow{
    overflow-y: scroll;
    top: 3rem;
    right: 0;
    height: 22vh;
    width: 14rem;
    position: absolute;
    font-size: 1rem;
    color:#8492a6;
    font-weight: 400;
    padding: 10px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    z-index: 3;


    .dropdow-item,.dropdow-main{
      line-height: 36px;
      margin: 0;
      font-size: 14px;
      color: #606266;
      cursor: pointer;
      outline: none;
      padding:0.6rem 1rem;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .dropdow-item:hover,.dropdow-main:hover{
      color: #1989fa;
      background-color: #ecf5ff;
    }

    ::-webkit-scrollbar{
      width: 10px;
      height: 1px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;

      background-color:rgba(0,0,0,0.3);

    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: none;

      background:rgba(0,0,0,0.2);
    }
  }


`
