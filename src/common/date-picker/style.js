import styled from "styled-components";



export const Wrapper = styled.div`
  position: absolute;
  transform: translateX(-20%);
  top: 6vh;
  width: 30vh;
  height: 13vw;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  background: #FFF;
  border-radius: 4px;
  line-height: 30px;
  padding:10px 20px;
  display: ${props => props.isShow};
  z-index: 10;
  
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
  }
  
  .months{
    color:#606266;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 10vw;
    .month{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30%;
      width: 25%;
      cursor: pointer;
      &.active{
        color: #409EFF;}
      }
    }
`
