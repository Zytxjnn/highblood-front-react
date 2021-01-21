import styled from "styled-components";

export const Wrapper = styled.div`
  .sub-list{
    display: flex;
    flex-wrap: wrap;
    .sub-item{
      display: flex;
      justify-content: space-between;
      margin: 0 2vw 1.88rem 0;
      width:45%;
      height:7.5rem;
      padding:1rem 1.25rem;
      background: #FFFFFF;
      box-shadow: 0.1rem 0.1rem 1rem 0.2rem rgba(111, 111, 111, 0.2);
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
