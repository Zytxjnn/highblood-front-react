import styled from "styled-components";
import chunk from '@/assets/imgs/qualityIndicators/chunk.png';
export const Wrapper = styled.div`
  .sub-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sub-item{
      display: flex;
      justify-content: space-between;
      margin: 0 0 1.88vw 0;
      width:45%;

      padding:1vw 1.25vw .7vw 1.25vw;
      background-image: url(${chunk});
      background-size: 100% 100%;
      border-radius: 1rem;
      cursor: pointer;
      .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        font-size: 1rem;
        font-weight: 800;
        
        .bot{
          display: flex;
          font-weight: 400;
          .item{
            flex:1;
            text-align: center;
            
            .highlight{
              color: #008599;
              font-size: 1.25rem;
              font-weight: 800;
            }
          }
        }
      }
      .right{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: #D4ECF2;
      }
    }
  }
`
