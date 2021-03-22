import React,{memo,useEffect,useState} from "react";
import {shallowEqual,useDispatch,useSelector} from "react-redux";
import axios from "axios";

import * as echarts from 'echarts';
import china from '@/assets/json/china.json';
import {cityMap} from '@/common/data-local.js'


import {
  getProvinceAction,
  getCityAction,
  getGradeAction,
  getShowCoreAction
} from '@/pages/controlIndex/store/actionCreator'
import {
  TopWrapper,
  Wrapper
} from "./style";
import {getContentAction} from "@/pages/dataOverview/store/actionCreator";



echarts.registerMap('china', china);


  export default memo(function DataViewCenter(){
  // props and state
  let map = null;
  const [ProvinceAlphabet,setProvinceAlphabet] = useState('');
  const provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan']
  const provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾'];



  // other hooks
  const {province,city,grade,show_core,user} = useSelector(state => {
    return {
      province:state.getIn(['controlIndex','province']),
      city:state.getIn(['controlIndex','city']),
      grade:state.getIn(['controlIndex','grade']),
      show_core:state.getIn(['controlIndex','show_core']),
      user:state.getIn(['user','user']),
    }
  },shallowEqual);

  const dispatch = useDispatch();
    useEffect(() =>{
    switch (grade){
      case 2:
        var provinceIndex = provincesText.findIndex(x => {
        return province === x
        });
        if (provinceIndex === -1) return;
        var provinceAlphabet = provinces[provinceIndex];
            setProvinceAlphabet(provinceAlphabet);
            getProvinceMapOpt(provinceAlphabet,province);
        break;
      case 3:
        var provinceIndex = provincesText.findIndex(x => {
          return province === x
        });
        if (provinceIndex === -1) return;
        var provinceAlphabet = provinces[provinceIndex];
          setProvinceAlphabet(provinceAlphabet);
          getCityMapOpt(city);
          break;
      case 1:
        if(user.user_role === 1){
          initalMap();
        }
        break;
    }
    },[grade,user]);


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

      // 请求省级地图及对应数据
      getProvinceMapOpt(provinceAlphabet,param.name);
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
            areaColor: '#4ab6d6', //地图颜色
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

  const getProvinceMapOpt = (provinceAlphabet,provinceName) =>{
    map = echarts.init(document.getElementById('map'));
    axios.get('geo/province/' + provinceAlphabet + '.json').then(s => {
      echarts.registerMap(provinceAlphabet,s.data);
      const option = getMapOpt(provinceAlphabet);

      map.setOption(option,true);
      getProvinceDataAndSet(provinceName);  // dispatch action 修改 redux 中数据

      map.off('click');

      map.on('click',param => { // 给下级添加点击事件
        getCityMapOpt(param.name);
      })
    })
  }

  const getProvinceDataAndSet = (provinceName) => { // 获取并设置省级数据
    dispatch(getProvinceAction(provinceName));  // 改变当前所在 province
    dispatch(getGradeAction(2)); // 改变层级
    const provinceIndex = provincesText.findIndex(x => {
      return provinceName === x
    });
    if (provinceIndex === -1) return;
    const provinceAlphabet = provinces[provinceIndex];
    setProvinceAlphabet(provinceAlphabet);
  }

  useEffect(() => { // 监听 city 改变

  },[city]);


  const getCityMapOpt = (cityName) => {
    map = echarts.init(document.getElementById('map'));
    // 将城市名称转为邮政编码
    const code = cityMap[cityName];
    axios.get('geo/city/' + code + '.json').then(s => {
      echarts.registerMap(cityName,s.data);
      const option = getMapOpt(cityName);
      map.setOption(option,true);

      getCityDataAndSet(cityName);

      map.off('click');
    })
  }

  const getCityDataAndSet = (cityName) => { // 市级数据处理
    dispatch(getCityAction(cityName));  // 改变当前 city
    dispatch(getGradeAction(3));  // 改变层级
  }

  const back = () => {  // 地图返回
    switch (grade){
      case 2:
        initalMap();
        dispatch(getGradeAction(1));
        dispatch(getProvinceAction(''));
        break;
      case 3:
        getProvinceMapOpt(ProvinceAlphabet,province);
        dispatch(getGradeAction(2));
        dispatch(getCityAction(''));
        break;
      default:
        break;
    }
  }

  return (
    <>
     <Wrapper>
        <TopWrapper>
          <div id="map">
          </div>
          {((grade === 2 && user.user_role === 1) || (grade === 3 && user.user_role <= 2)) && <div className="back" onClick={() => {back()}}>地图返回</div> }
          {show_core  || <div className="back" onClick={() => {dispatch(getShowCoreAction(true))}}>指标返回</div> }
        </TopWrapper>
     </Wrapper>
    </>
  )
})
