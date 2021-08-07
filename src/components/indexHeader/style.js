import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  padding:0 3vw;
  .left{
    display: flex;
    align-items: center;
    font-size:1.9vw;
    img{
      margin-right: .5rem;
    } 
  }
  .tools{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right{
    display: flex;
    align-items: center;
  }
`