import styled from "styled-components";

import centerTopBg from '@/assets/imgs/dataOverview/center-top.png'
import backBtn from '@/assets/imgs/dataOverview/back-btn.png'
import circle from '@/assets/imgs/dataOverview/circle.png'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 102vh;
  position: relative;
`

export const TopWrapper = styled.div`
  position: relative;
  background-image:url(${centerTopBg});
  background-size: 100% 100%;
  height: 77vh;
  z-index: 2;
  
  #map{
    margin: 0 auto;
    width: 80%;
    height: 75%;
    z-index: 3;
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
    top: 25%;
    left: 1vw;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-image: url(${backBtn});
    background-size: 100% 100%;
    width: 6.28rem;
    height: 2.61rem;
    color: #00E4FF;
    cursor: pointer;
    user-select: none;
  }
`
export const BotWrapper = styled.div`
  
`