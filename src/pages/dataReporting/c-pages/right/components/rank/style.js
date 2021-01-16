import styled from 'styled-components';
import titleBg from '@/assets/imgs/dataOverview/title.png'
import right from '@/assets/imgs/dataOverview/right.png'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(${right});
  background-size: 100% 100%;
  width: 95%;
  box-sizing: border-box;
  padding:.3rem 1rem;
    
  >.title{
    display: flex;
    align-items: center;
    width: 100%;
    height: 3vh;
    z-index: 2;
    font-size: 2.2vh;
    font-weight: bold;
    background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .hover{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 4vh;
    background-image: url(${titleBg});
    background-size: 100% 100%;
  }

  .list{
    margin: 1vh 0;
    width: 100%;
    height: auto;
    overflow-y: scroll;


    ::-webkit-scrollbar{
      width: 5px;
      height: 1px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color:#00FFFF;

    }

    ::-webkit-scrollbar-track {
      width: 1px;
      -webkit-box-shadow: none;
      background:rgba(0,0,0,0.2);
    }

    .item-area{
      font-size:1.1rem;
      color:#CDCDCD;
      height: 1.875rem;
      line-height: 1.875rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .item-progress{
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ant-progress{
        width: 85%;
      }
      .score{
        color:#fff;
      }
    }

    span{
      margin-right: .3vw;
    }
  }

  .option{
    z-index: 3;
    position: absolute;
    top:1%;
    right: 5%;
    display: flex;
    color:#fff;
    border: 1px solid #00FFFF;
    border-radius: 5px;
    overflow: hidden;

    >div{

      &:nth-child(1),&:nth-child(2){
        border-right:1px solid #00FFFF ;
      }

      text-align: center;
      width: 3vw;
      cursor: pointer;
    }

    .active{
      background-color: #0a4cd3;
    }
  }
`

