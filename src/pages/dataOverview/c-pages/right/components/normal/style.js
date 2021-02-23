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
  .info-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1.3rem;
    margin-top: 4vh;
    .info-item{
      width: 45%;
      color:#fff;
      .title{
        display: flex;
        align-items: center;
        color:#64B7F7;
        
        img{
          margin-right: .5vw;
        }
      }
      .count{
        //text-align:right;
        span{
          font-size: 3rem;
          font-weight: 800;
        }
      }
    }
  }
`
