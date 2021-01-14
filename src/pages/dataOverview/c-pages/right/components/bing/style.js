import styled from 'styled-components';

import titleBg from '@/assets/imgs/dataOverview/title.png'
import leftBottom from '@/assets/imgs/dataOverview/left-bottom.png'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-image: url(${leftBottom});
  background-size: 100% 100%;
  width: 95%;
  height: calc(100vh - 2vh - 30vh);
  box-sizing: border-box;
  padding:.3rem 1rem;
  
  
  >.title{
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 3vh;
    z-index: 2;
    font-size: 2.2vh;
    font-weight: bold;
    background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hover{
    position: absolute;
    top: 0;
    left: 3px;
    width: 99%;
    height: 4vh;
    background-image: url(${titleBg});
    background-size: 100% 100%;
  }
  
`