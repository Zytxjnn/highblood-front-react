import styled from "styled-components";
import chunk from '@/assets/imgs/qualityIndicators/chunk.png';
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items:center;
    box-sizing: border-box;
    margin: 0 0 1.88vw 0;
    width:45%;
    height:7.5rem;
    padding:1rem 1.25rem;
    background-image: url(${chunk});
    background-size: 100% 100%;
    border-radius: 1rem;
    cursor: pointer;

     .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 70%;
      height: 100%;
    }

     .icon{
      width: 4.5rem;
      height: 4.5rem;
      background: #D4ECF2;
      border-radius: 50%;
    }

    .count{
      color:#323232;
    }

    .count .highlight{
      font-weight: bolder;
      font-size: 1.25rem;
      color: #008599;
    }

    .icon-gengduo{
      position: absolute;
      right: 0.2rem;
      top: 0.25rem;
      color:#008599;
      font-size: 1.5rem;
    }

    .icon{
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info .title{
      font-size: 1rem;
      font-weight:bold;
    }
  }
`
