import styled from "styled-components";

import top from '../../assets/imgs/dataOverview/top.png';


export const HeaderWrapper = styled.div`
  height: 10vh;
  background:url(${top}) no-repeat;
  background-size: 100% 10vh;
  color: #fcff0c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:1.9vw;
  font-weight: 800;
  
  img{
    margin-right: .5rem;
  }
  
`