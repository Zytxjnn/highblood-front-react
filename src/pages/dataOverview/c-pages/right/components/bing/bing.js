import React,{memo,useEffect} from 'react';

import {
  Wrapper,
} from './style';
import * as echarts from "echarts";
import {Spin} from "antd";
import {useSelector} from "react-redux";
import {LoadingOutlined} from "@ant-design/icons";


export default memo(function (props){
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const {content_state} = useSelector(state => ({
    content_state:state.getIn(['dataOverview','content_state'])
  }));
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',

    },
    legend: {
      bottom:-20,
      y:'bottom',
      textStyle:{
        fontSize:20,
        color:'#fff'
      }

    },
    color:['#1792E6','#94D4FF','#2B71FF'],
    series: [
      {
        name: '医院分类',
        type: 'pie',
        radius: '55%',
        avoidLabelOverlap: false,
        label: {
          normal:{
            position:'outer',
            formatter:'{d}%',
            fontSize: 18,
            color:'#01C4F7'
          },

        },
        labelLine: {
          show: true
        },
        data: [
          {value: 465, name: '一级医院'},
          {value: 1465, name: '二级医院'},
          {value: 165, name: '三级医院'},
        ]
      }
    ],
    textStyle:{
      color:'#01C4F7'
    }
  }

  const {data} = props;
  useEffect(() => {
    if(data){
      let flag = true;
      if(!data[0].y && !data[1].y && !data[2].y){
        flag = false; 
        return;
      }
    }

    if(data){
      for(let i in data){   // 获取数据后改变options
        option.series[0].data[i].value = data[i].y;
        option.series[0].data[i].name = data[i].x;
      }
    }
    let chart = echarts.init(document.getElementById('pie'));



    chart.setOption(option);
  },[data])

  return (
    <Wrapper>
      <div className="title">注册医院分类统计</div>
      <div className="hover" />
      <div id="pie"  style={{'width':'100%','height':'60vh'}} />
      {content_state ? <Spin tip="Loading..." indicator={antIcon} /> : '' }
    </Wrapper>
  )
})