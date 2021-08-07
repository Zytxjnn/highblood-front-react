import styled from "styled-components";



export const Wrapper = styled.div`
  position: relative;
  .date{
    position: relative;
    display: flex;
    align-items: center;
    width: 20vh;
    height: 4vh;
    border:1px solid #ccc;
    color: #008599;
    font-weight: 800;
    font-size: 1rem;
    border-radius: 1vw;
    padding: 0 1vw;
    cursor: pointer;
    user-select: none;
  }
  
  img{
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  

`
