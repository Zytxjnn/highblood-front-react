import React,{memo,useEffect} from 'react';
import {useSelector} from "react-redux";

import {
  Wrapper,
} from './style';
import * as echarts from 'echarts'

import axios from "axios";


export default memo(function (props){

  const {all_count} = useSelector(state => ({
    all_count:state.getIn(['dataReporting','all_count'])
  }))

  useEffect(() => {
    let chart = echarts.init(document.getElementById('blChart'));
    const option = {
      tooltip: {
        trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        x:'right',
          y:'center',
          orient: 'vertical',
          textStyle:{
          color:'#fff',
            fontSize:16
        },
        itemGap:20
      },
      graphic:{
        type:"text",
          // left:"30%",
          left:'31%',
          top:'center',
          // top:"45%",
          style:{
          text:`填报总数

12365例`,
            fill:"#fff",
            fontSize:16
        }
      },
      color:['#1792E6','#94D4FF','#2B71FF'],
        series: [
        {
          name: '病例填报状态',
          type: 'pie',
          center: ["40s%", "50%"],
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          labelLine: {
            show: true
          },
          data: [
            {value: 1136, name: '填报中'},
            {value: 1113, name: '填报完成'},
            {value: 1136, name: '已审核'},
            {value: 736, name: '已归档'},
            {value: 536, name: '诊断中'}
          ],
          label: {
            normal: {
              position:'inner',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
        }
      ]
    }


      for(let i in all_count.count){
        option.series[0].data[i].value =all_count.count[i].count;
        option.series[0].data[i].name =all_count.count[i].name;
      }

      option.graphic.style.text = ` 填报总数

${all_count.all_count}例`;
      chart.setOption(option);


  },[all_count])

  return (
   <Wrapper>
     <div className="title">标准版认证情况</div>
     <div className="hover" />
     <div id='blChart'  />
   </Wrapper>
  )
})