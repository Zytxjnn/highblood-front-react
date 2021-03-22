import styled from "styled-components";

import pageBg from '@/assets/imgs/dataOverview/bg.png'

export const Wrapper = styled.div`
  background:url(${pageBg}) ;
  background-size: 100% 100%;
  height: 100vh;
  overflow-y: scroll;

  #charts{
    padding:1.88rem 2rem;
    display: grid;
    grid-template-columns: repeat(3,30vw);
    grid-template-rows: repeat(3,15rem);
    grid-row-gap: 4rem;
    grid-column-gap: 2rem;
  }

  #charts .charts-item{
    width: 30vw;
    height: 30vh;
    color: #fff;
  }

  .nodata{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    font-size: 5vh;
    background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }

`

