import React,{memo,useEffect,useState} from "react";
import {shallowEqual, useSelector} from "react-redux";

import * as echarts from 'echarts';
import china from 'echarts/map/json/china';
import icon1 from '@/assets/imgs/dataOverview/1.png';
import icon2 from '@/assets/imgs/dataOverview/2.png';
import icon3 from '@/assets/imgs/dataOverview/3.png';
// import bmap from 'echarts/extension/bmap/bmap';


import {
  BotWrapper,
  TopWrapper,
  Wrapper
} from "./style";
import Chunk from './components/chunk'
import axios from "axios";



echarts.registerMap('china', china);

export default memo(function DataViewCenter(){
  // props and state
  let map = null;
  const [Province,setProvince] = useState('');
  const [City,setCity] = useState('');
  const provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan']
  const provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾'];



  // other hooks
  const {content} = useSelector(state => ({
    content:state.getIn(['dataOverview','content'])
  }),shallowEqual)

  useEffect(() =>{
    initalMap();
  },[]);

  // 业务逻辑
  // init地图
  const initalMap = (place) => {
    if (map != null && map !== "" && map !== undefined) {
      map.dispose();
    }
    map = echarts.init(document.getElementById('map'));
    map.setOption(getMapOpt(),true);

    map.on('click',param => {
      // 将文字将为拼音，用于请求地图
      const provinceIndex = provincesText.findIndex(x => {
        return param.name === x
      });
      if (provinceIndex === -1) return;
      const provinceAlphabet = provinces[provinceIndex]

      // 请求地图
      getProvinceMapOpt(provinceAlphabet);
    })
  }

  const getMapOpt = (place) => {
    const option = {
      //   backgroundColor: '#F3F3F3', //地图背景颜色
      //以下是地图标题，我在此处设空，需要的可以自己加上
      title: {
        text: '',
        subtext: '',
        left: 'center'
      },
      geo: {
        map: place || 'china',
        label: {
          emphasis: {
            show: false
          },
          // 不需要显示地名可直接删除normal此项
          normal: {
            show: true, // 是否显示对应地名
            textStyle: {
              color: 'rgba(0,0,0)'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#5784E8', //地图颜色
            borderColor: '#fff' //地图边线颜色
          },
          emphasis: {
            areaColor: '#6FA7CE' //鼠标移入颜色
          }
        }
      }
    }
    return option
  }

  const getProvinceMapOpt = (provinceAlphabet) =>{
    axios.get('geo/province/' + provinceAlphabet + '.json').then(s => {
      console.log(s);
      echarts.registerMap(provinceAlphabet,s.data);
      const option = getMapOpt(provinceAlphabet);
      map.setOption(option,true);
    })

  }

  return (
    <>
     <Wrapper>
        <TopWrapper>
          <div className='chunks'>
            <Chunk count={content.sum_pass_unit} text='通过认证医联体' logo={icon1} />
            <Chunk count={content.sum_pass_hospital} text='通过认证医院总数' logo={icon2} />
            <Chunk count={content.sum_register_hospital} text='注册医院总数' logo={icon3} />
          </div>
          <div id="map">
          </div>
        </TopWrapper>
       <BotWrapper>

       </BotWrapper>
     </Wrapper>
    </>
  )
})