import styled from "styled-components";

import preBtn from '@/assets/imgs/dataOverview/left-btn.png'

export const  Wrapper  = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  height: 7vh;
  width: 7vh;
  border-radius: 50%;
  background-image: url(${preBtn});
  background-size: 100% 100%;
  cursor: pointer;
  z-index: 2;
  
  a{
    display: block;
    width: 100%;
    height: 100%;
  }
`

