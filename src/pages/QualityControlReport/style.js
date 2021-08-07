import styled from 'styled-components';

export const Wrapper = styled.div`
  .ant-col-12{
    padding: 1vh 2vw;
    height: calc(100vh - 11vh);
    
    &:nth-child(2){
      border-left:1px solid #ccc;
      overflow-y: scroll;
    }
  }
`
