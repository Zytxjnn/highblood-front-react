import styled from "styled-components";

import centerBot from '@/assets/imgs/dataOverview/center-bot.png'
import titleBg from '@/assets/imgs/dataOverview/title.png'

export const Wrapper = styled.div`
  
  background-image: url(${centerBot});
  background-size: 100% 100%;

  #logs{
    position: relative;
    height: 20vh;
    width: 100%;
    padding:0 1rem;

    .nodata{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      font-size: 5vh;
      background: linear-gradient(92deg, #0072FF 0%, #00EAFF 48.8525390625%, #01AAFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
    }
    
    >.title{
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 4vh;
      z-index: 20000;
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
    
    .logs{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      height: 14vh;
      margin: 1vh 0;
     
      .log{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        padding:0 1%;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis; /*使溢出文字以省略号显示*/
        white-space: nowrap; /*使文字在同一行显示，不换行*/
        
        margin: 1vh 0;
      }
      
      .border{
        border-right:1px solid #01d8fe;
      }
    }
  }

 
`
