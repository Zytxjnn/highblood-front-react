import styled from "styled-components";

import centerTopBg from '@/assets/imgs/dataOverview/center-top.png'

export const Wrapper = styled.div`

  
`

export const TopWrapper = styled.div`
  background-image:url(${centerTopBg});
  background-size: 100% 100%;
  height: 60vh;
  margin-top: 2vh;
  #map{
    margin: 0 auto;
    width: 80%;
    height: 50vh;
    max-width: 1000px;
  }
  
  .chunks{
    margin-top: 2vh;
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
  }
`

export const BotWrapper = styled.div`
  
`