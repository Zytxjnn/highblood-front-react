import React,{memo,useEffect,useState} from 'react';

import {
  Wrapper,
} from './style';
import * as echarts from "echarts";


export default memo(function (props){

  const {data} = props;

  useEffect(() => {
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
    let chart = echarts.init(document.getElementById('pie'));

    if(data){
      for(let i in data){   // 获取数据后改变options
        option.series[0].data[i].value = data[i].y;
        option.series[0].data[i].name = data[i].x;
      }
    }

    chart.setOption(option);
  },[data])


  return (
    <Wrapper>
      <div className="title">注册医院分类统计</div>
      <div className="hover" />
      <div id="pie"  style={{'width':'100%','height':'60vh'}} />
    </Wrapper>
  )
})