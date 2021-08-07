import styled  from "styled-components";

export const Wrapper = styled.div`
  padding: 0 2rem 2rem 0;
  height: calc(80vh);     
  overflow-y: scroll;
  box-sizing: border-box;
 .ant-collapse{
   height: 100%;
   border:none;
   font-size: 18px;
   background-color: #fafafa;
   
   .ant-collapse-content-box{
     background-color: #fafafa;
   }
    
   .ant-collapse-header{
     background-color: #ebebeb;
     &::before{
         position:absolute;
         left: 0;
         top: 0.85rem;
         height: 1.5rem;
         width: 0.15rem;
         background-color: #008599;
         content: "";
       }
     }
   }
 }
  
  .sub-panel{
    display: grid;
    grid-template-columns:repeat(4,23%);
    grid-column-gap:1rem;
    grid-row-gap:1rem;
    flex-wrap: wrap;
    font-size: 0.85rem;

    .hospital-item{
      min-height: 10vh;
      border-radius: 0.5rem;
      box-sizing: border-box;
      padding: 1rem;
      background-color: #fff;
      cursor: pointer;
      
      .highlight{
        font-weight: 800;
      }
    }
    
    .hospital-name{
      color:#008599;
    }

    .rank{
      display: flex;
      justify-content:space-between;
    }
  }
  
  .nodata{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 7vh;
  }
`