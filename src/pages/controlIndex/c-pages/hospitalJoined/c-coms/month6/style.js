import styled from "styled-components";

export const Wrapper = styled.div`
  width: 47%;
  height: 51vh;
  box-sizing: border-box;
  padding: 1.5rem 1rem 1.5rem 1rem;
  background: #FFFFFF;
  box-shadow: 0rem 0rem 1rem 0rem rgba(74, 182, 214, 0.23);
  border-radius: 1rem;
  
  .title{
    text-align: center;
    font-size: 1rem;
  }
  
  .progress-list{
    height: 60%;
    overflow-y: scroll;
    
    .progress{
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height:3;

      .progress-month{
        margin-right: 1rem;
      }
      .ant-progress{
        display: flex;
        align-items: center;
        flex:1;


        .ant-progress-inner{
          width: 96%;
        }
        .ant-progress-text{
          font-size: 1rem;
          color:#000;
        }
      }
    }
  }
  
  .total{
    display: flex;
    align-items: center;
    margin-top: 2vh;
    .text{
      font-size: 1rem;
      margin-right: 3vw;
      margin-left: 1vw;
    }
    .count{
      color: #F39317;
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
  
  .recent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 32px;
      height: 32px;
    }
    .item{
      margin-top: 2vh;
      display: flex;
      align-items: center;
      .right{
        margin-left: .3vw;
      }
    }
    .item:nth-child(1){
      .right-count {
        font-weight: 800;
        color:rgb(74, 182, 214);
      }
    }
    .item:nth-child(2){
      .right-count {
        font-weight: 800;
        color:rgb(171, 78, 215);
      }
    }
  }
`
