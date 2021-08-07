import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${props => {
    return props.grade ? '10vw' : '13vw'
  }};
  margin-right: 2vw;
`