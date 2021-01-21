import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Chunk = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem 1vw .3rem 1.5vw;
  width: 11vw;
  height: 7rem;
  background-size: 100% 100%;
  background-image: url(${props => props.bg});
  .item-name{
    font-size: 16px;
  }
  .item-value{
    text-align: right;
    font-size: 1.80rem;
  }
`

