import styled from "styled-components";

import centerBot from '@/assets/imgs/dataOverview/center-bot.png'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  background-image: url(${centerBot});
  background-size: 100% 100%;

  #histogram{
    display: ${props => props ? 'block' : 'none'};
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
    font-size: 3vh;
    background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }
`