import styled from "styled-components";


import backBtn from '@/assets/imgs/qualityIndicators/back-button.png'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  position: relative;
`

export const TopWrapper = styled.div`
  position: relative;

  background-size: 100% 100%;
  height: 100%;

  
  #map{
    margin: 0 auto;
    width: 90%;
    height: 98%;
    max-width: 1000px;
  }
  
  .chunks{
    margin-top: 2vh;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1vw;
  }

  .back{
    position: absolute;
    top: 10%;
    right: 13%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-image: url(${backBtn});
    background-size: 100% 100%;
    width: 6.28rem;
    height: 2.61rem;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }
  .back:nth-child(2){
    right: 0;
    top: 10%;
  }
`

