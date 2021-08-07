import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Chunk = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:0.75rem 1.31rem 0.75rem 0;
    align-items:center;;
    width: 12rem;
    height: 5rem;
    border-radius:3rem;
    margin-top: 3rem;
    background: linear-gradient(270deg, rgba(74, 182, 214, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
    
  &:nth-child(1) .value{
    color:#008599;
  }

  &:nth-child(2){
    background: linear-gradient(270deg, rgba(74, 117, 214, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
  }
  &:nth-child(2) .value{
    color:#4A75D6;
  }

  &:nth-child(3){
    background: linear-gradient(270deg, rgba(170, 74, 214, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
  }
  &:nth-child(3) .value{
    color:#AC4ED7;
  }
  
  .item-info{
    display: flex;
    text-align: right;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .item-title{
    font-size: 1rem;
  }

  .item-info .value{
    font-weight: bold;
  }

  .item-icon img{
    width: 2.5rem;
    height: 2.6rem;
  }
`

