import styled from "styled-components";

import searchInput from '@/assets/imgs/qualityIndicators/search-input.png'
import searchHospital from '@/assets/imgs/qualityIndicators/search-hospital.png'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0.75rem 0 0.75rem 1.25rem;
  box-sizing: border-box;
  width: 13.75rem;
  height: 3rem;
  background-image: url(${searchInput});
  background-size: 100% 100%;
  margin: 0 1.25rem;

  .textinput{
    width: 8rem;
    border:none;
    background-color: transparent;
    outline: none;
    color:#000;
    font-size: 1rem;
    font-weight: 800;
    &::placeholder{
      border:none;
      outline: none;
      color:#ccc;
      font-size: 1rem;
    }
  }
  
  img{
    width: 40px;
    height: 40px;
  }
  
  .hospitalList{
    display: ${props => props.isShow};
    overflow-y: scroll;
    top: 3rem;
    right: -20%;
    height: 30vh;
    width: 30vh;
    position: absolute;
    font-size: 1rem;
    color:#8492a6;
    font-weight: 400;
    padding: 10px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 1rem;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    z-index: 3;
    .hospital{
      cursor: pointer;
      padding:0.6rem 1rem;
      line-height: 2rem;
      text-align: center;
      &:hover{
        color:#6ab5ff;
        background-color: #ecf5ff
      }
    }

    ::-webkit-scrollbar{
      width: 10px;
      height: 1px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;

      background-color:rgba(0,0,0,0.3);

    }

    ::-webkit-scrollbar-track {
      -webkit-box-shadow: none;

      background:rgba(0,0,0,0.2);
    }
  }

  
`
