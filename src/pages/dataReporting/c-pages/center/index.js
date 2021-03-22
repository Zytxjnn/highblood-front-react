import React,{memo,useEffect,useState} from "react";
import {shallowEqual, useDispatch,useSelector} from "react-redux";
import axios from "axios";

import * as echarts from 'echarts';


import china from '@/assets/json/china.json';
import icon1 from '@/assets/imgs/dataOverview/1.png';
import icon2 from '@/assets/imgs/dataOverview/2.png';
import icon3 from '@/assets/imgs/dataOverview/3.png';
import {cityMap} from '@/common/data-local.js'





import {
  getCountAction,
  getCountByProvinceAction,
  getCountByCityAction,
  getProvinceAction,
  getCityAction,
  getGradeAction,

} from '@/pages/dataReporting/store/actionCreator';

import {
  BotWrapper,
  TopWrapper,
  Wrapper
} from "./style";
import Chunk from './components/chunk/chunk';
import Logs from './components/logs/logs'
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {getContentAction} from "@/pages/dataOverview/store/actionCreator";

echarts.registerMap('china', china);


export default memo(function DataViewCenter(){
  // props and state
  let map = null;
  const [ProvinceAlphabet,setProvinceAlphabet] = useState('');
  const provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan']
  const provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾'];



  // other hooks
  const {all_count,province,city,grade,user,login} = useSelector(state => {
    return {
      all_count:state.getIn(['dataReporting','all_count']),
      province:state.getIn(['dataReporting','province']),
      city:state.getIn(['dataReporting','city']),
      grade:state.getIn(['dataReporting','grade']),
      user:state.getIn(['user','user']),
      login:state.getIn(['user','login'])
    }
  },shallowEqual);

  // useEffect(() => {
  //   console.log(all_count);
  // },[all_count])

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
          dispatch(getContentAction());
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

  const getProvinceMapOpt = (provinceAlphabet,provinceName) =>{
    map = echarts.init(document.getElementById('map'));
    axios.get('geo/province/' + provinceAlphabet + '.json').then(s => {
      echarts.registerMap(provinceAlphabet,s.data);
      const option = getMapOpt(provinceAlphabet);
      map.setOption(option,true);

      setProvinceAlphabet(provinceAlphabet);
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
  }

  useEffect(() => {
      switch (grade){
        case 2:
          dispatch(getCountByProvinceAction(province))
          break;
        case 3:
          dispatch(getCountByCityAction(city))
          break;
        default:
          dispatch(getCountAction());
          break;
      }
    },[grade])


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
        dispatch(getCountAction());
        dispatch(getGradeAction(1));
        dispatch(getProvinceAction(''));
        setProvinceAlphabet('');
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

    const {count_state} = useSelector(state => ({
      count_state:state.getIn(['dataReporting','count_state'])
    }))


    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
     <Wrapper>
        <TopWrapper>
          <div className='chunks'>
            {all_count  && <Chunk count={all_count.all_count} text='累计填报病例总数' logo={icon1} />}
            {all_count  && <Chunk count={all_count.today_count} text='今日填报病例总数' logo={icon3}/>}
            {all_count  && <Chunk count={all_count.today_org} text='今日填报医院数量' logo={icon2}  flag={true}  />}
          </div>
          <div id="map">
          </div>
          { ((grade === 2 && user.user_role === 1) || (grade === 3 && user.user_role <= 2))&& <div className="back" onClick={() => {back()}}>返回</div> }
          {count_state ? <Spin tip="Loading..." indicator={antIcon} /> : '' }
        </TopWrapper>
        <BotWrapper>
          <Logs/>
       </BotWrapper>
     </Wrapper>
    </>
  )
})
