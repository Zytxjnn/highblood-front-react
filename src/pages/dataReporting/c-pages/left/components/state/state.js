import React,{memo,useEffect,useState} from 'react';
import {useSelector} from "react-redux";

import {
  Wrapper,
} from './style';
import * as echarts from 'echarts'
import {
  Spin
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



export default memo(function (props){
  const [isLoading,setIsLoading] = useState(true);
  const {all_count} = useSelector(state => ({
    all_count:state.getIn(['dataReporting','all_count'])
  }));
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
        itemGap:20,

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
            {value: 0, name: '填报中'},
            {value: 0, name: '填报完成'},
            {value: 0, name: '已审核'},
            {value: 0, name: '已归档'},
            {value: 0, name: '诊断中'}
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

    chart.setOption(option);

    JSON.stringify(all_count) !== '{}' &&  setIsLoading(false);

  },[all_count])

  return (
   <Wrapper>
     <div className="title">标准版认证情况</div>
     <div className="hover" />
     <div id='blChart'  />
     { isLoading && <Spin tip="Loading..." indicator={antIcon} />}
   </Wrapper>
  )
})