import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 80vh;
  background-image: url("http://zk.chinacpc.org/static/images/login/bg.png");
  background-size: 100% 100%;
  
  .title{
      color:#6b98d7;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1rem;
  }
  
  .form{
    padding: 4vh 2vw;
    border-radius: 1rem;
    position: absolute;
    top: 20%;
    right: 10%;
    width: 30%;
    max-width: 30rem;
    background-color: hsla(0,0%,100%,.9);
    
    .ant-checkbox-wrapper{
      user-select: none;
    }
    
    .ant-form-item-required{
      &::before{
        display: none !important;
      }
    }
    
    .forget-psd{
      color:#1890ff;
      cursor:pointer;
      user-select: none;
      float: right;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  
  
`
