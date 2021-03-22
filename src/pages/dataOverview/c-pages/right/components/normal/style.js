import styled from 'styled-components';
import titleBg from '@/assets/imgs/dataOverview/title.png'
import leftTop from '@/assets/imgs/dataOverview/left-top.png'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;


  height: 30vh;
  background-image: url(${leftTop});
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
    left: 3px;
    top: 0;
    width: 100%;
    height: 4vh;
    background-image: url(${titleBg});
    background-size: 100% 100%;
  }

  .ant-spin{
    z-index: 10;
    position:absolute;
    width:100%;
    height:100%;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
  }
`

export const InfoList = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  bottom: 0;
  height: 27vh;
  overflow: hidden;
  transform: translate(-50%,0%);
  .info-list{
    height: 27vh;
    display: grid;
    grid-template-columns: 50% 50%;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7% 10% 0 10%;
    .info-item{
      color:#fff;
      .title{

        align-items: center;
        color:#64B7F7;
        overflow:hidden ;
        white-space: nowrap;
        text-overflow: ellipsis;

        img{
          margin-right: .5vw;
        }
      }
      .count{

        // 数字居中 单位居右
        //display: flex;
        //align-items: center;
        //justify-content: center;
        span:nth-child(1){
          flex: 1;
          text-align: center;
          font-size: 2.7rem;
          font-weight: 800;
        }

      }
    }
  }
`
