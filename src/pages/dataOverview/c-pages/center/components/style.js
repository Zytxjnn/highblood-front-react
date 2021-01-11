import styled from "styled-components";

import bg from '@/assets/imgs/dataOverview/chunk.png'

export const ChunkWrapper = styled.div`
  background: url(${bg});
  background-size: 100% 100%;
  width: 30%;
  max-width: 17rem;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 1.2rem;
  
  .icon{
    
  }
  
  .info{
    box-sizing: border-box;
    flex:1;
    padding-left: 1vw;
  }
  
  .info-text{
    color: #02D9FD;
    position: relative;
    top: 10px;
  }
  
  .info-count{
    color:#fff;
    
  }
  
  .info-count span{
    color:#FCFF0C;
    font-size: 5vh;
    font-weight: bold;
  }
`

