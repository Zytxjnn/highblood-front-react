import styled from "styled-components";

export const Wrapper = styled.div`
  width:8rem;
  padding: ${props => props.state ? '10px' : '0'};;
  position: fixed;
  top: 50%;
  transform: translate(0,-50%);
  left: 0;
  box-sizing: border-box;
  background-color: #fff;
  border-radius:0 1rem 1rem 0;
  box-shadow: 2px 0px 5px #cbd3ff;
  z-index: 999;
  .views{
    display:${props => props.state ? 'block' : 'none'}; ;
  }
  .view{
    
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    &:hover{
      background-color:#cbd3ff;
    }
  }
  
  .close{
    cursor: pointer;
    position: fixed;
    display:flex;
    align-items: center;
    top: 50%;
    transform:translateY(-10vh);
    left: ${props => props.state ? '8.02rem' : '0'};
    width: 1.5rem;
    height: 20vh;
    box-shadow: 2px 0px 5px #cbd3ff;
    border-radius: 0 5rem 5rem 0;
    color:#fff;
    background: linear-gradient(0deg, #269DAF 0%, #7FD6F0 100%);
  }
`