import React,{memo,useEffect,useState} from 'react';
import {shallowEqual, useSelector} from "react-redux";
import {
  Wrapper,

} from './style';
import {
  getScoreListForHospitalJoined,
  getScoreListForHospital
} from '@/network/controlIndex';
import * as echarts from 'echarts';


export default memo(function (){
  const [data,setData] = useState({});
  const {grade,hospital_joined_id,hospital_id} = useSelector(state => ({
    grade:state.getIn(['controlIndex','grade']),
    hospital_joined_id:state.getIn(['controlIndex','hospital_joined_id']),
    hospital_id:state.getIn(['controlIndex','hospital_id']),
  }),shallowEqual);

  useEffect(() => {
    switch (grade){
      case 4:
        getScoreListForHospitalJoined(hospital_joined_id).then(res => {
          setData(res.data.data)
        })
        break;
      case 5:
        getScoreListForHospital(hospital_id).then(res => {
          setData(res.data.data)
        })
        break;
      default:break;
    }
  },[grade]);

  useEffect(() => {
    if(JSON.stringify(data) === "{}") return;
    const option =  {
      backgroundColor:'',
      tooltip:{
        show:true,
        trigger:'axis'
      },
      title:{
        show:true,
        text:'近四月质控分数',
        textStyle:{
          fontSize:'16',
          fontWeight:500
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一季度', '二季度', '三季度', '四季度'],
        axisTick:{
          show:false
        },
        axisLine:{
          show:false
        }
      },
      yAxis: {
        type: 'value',
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        }
      },
      series: [{
        data: [25,60,42,56],
        type: 'line',
        areaStyle: {},
        smooth:0.3,
        itemStyle:{
          normal:{
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#4A75D6" },
              { offset: 0.5, color: "rgba(58, 167, 255,0.4)" },
              { offset: 1, color: "rgba(58, 167, 255,0)" }
            ])
          }
        }
      }]
    };
    option.xAxis.data = data.x_list;
    option.series[0].data = data.y_list;
    const compChart = echarts.init(document.getElementById('chart'));
    compChart.setOption(option);
  },[data]);


  return (
    <Wrapper>
      <div id="chart">
      </div>
    </Wrapper>
  )
});