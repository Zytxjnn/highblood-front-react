import styled from "styled-components";
import backBtn from '@/assets/imgs/qualityIndicators/back-button.png';

export const Wrapper = styled.div`
  div{
    margin-right:2vw;
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
`
