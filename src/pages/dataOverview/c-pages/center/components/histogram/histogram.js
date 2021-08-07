import React,{memo,useEffect} from "react";
import {shallowEqual, useSelector} from "react-redux";

import * as echarts from 'echarts';
import {
  Wrapper
} from "./style";

export default memo(function (){


  const {content,grade} = useSelector(state => ({
    content:state.getIn(['dataOverview','content']),
    grade:state.getIn(['dataReporting','grade']),
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city']),
  }),shallowEqual);

  useEffect(() => {
    let gradeText = '';
    switch (grade){
      case 1:
        gradeText = '各省';
        break;
      case 2:
        gradeText = '各市';
        break;
      case 3:
        gradeText = '各市';
    }
    const option = {
      title:{
        show:true,
          text:`${gradeText}注册量、建设中、通过认证数量`,
          y:10,
          x:5,
          textStyle:{
          color:'#0096FF'
        }
      },
      grid:{
        x:25,
          x2:25,
          y2:50
      },
      color:['#7AE911','#FF8B19','#04B7FF'],
        legend: {
        data: ['注册量', '建设中','通过认证量'],
          right:10,
          top:10,
          textStyle:{
          color:'#fff'
        }
      },
      tooltip:{
        show:true
      },
      calculable: true,
        xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLabel: {
            interval:0,//代表显示所有x轴标签显示 b
            color:'#fff',
          },
        }
      ],
        yAxis: [
        {
          show:false,
          type: 'value',
        }
      ],
        series: [
        {
          name: '注册量',
          type: 'bar',
          barGap:0,
          barCategoryGap:'30%',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                }
              }
            }
          },
        },
        {
          name: '建设中',
          type: 'bar',
          barGap:0,
          barCategoryGap:'30%',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                }
              }
            }
          },
        },
        {
          name: '通过认证量',
          type: 'bar',
          barGap:0,
          barCategoryGap:'30%',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                }
              }
            }
          },
        }
      ],
        dataZoom: [
        {
          show: true, // 为true 滚动条出现
          realtime: true,
          type:'slider', // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
          y:180,
          height: 0,
          end:30
        },
        {
          show: true, // 为true 滚动条出现
          realtime: true,
          type:'inside', // 有type这个属性，滚动条在最下面，也可以不行，写y：36，这表示距离顶端36px，一般就是在图上面。
          height: 0, // 表示滚动条的高度，也就是粗细

        }
      ]
    };

    let num = content.zhu_info && content.zhu_info.map(i => {
      return i.num;
    });
    let build_num = content.zhu_info && content.zhu_info.map(i => {
      return i.build_num;
    });
    let pass_num = content.zhu_info && content.zhu_info.map(i => {
      return i.pass_num;
    });
    let province = content.zhu_info && content.zhu_info.map(i => {
      return i.province;
    });


    option.series[0].data = num;
    option.series[1].data = build_num;
    option.series[2].data = pass_num;
    option.xAxis[0].data = province;

    let chart = echarts.init(document.getElementById('histogram'));
    chart.setOption(option);

  },[content])

  return (
   <Wrapper isShow={JSON.stringify(content.zhu_info) !== '[]'}>
     {JSON.stringify(content.zhu_info) !== '[]'}
        <div id='histogram' style={{'width':'100%','height':'20vh'}}>
        </div>
     {JSON.stringify(content.zhu_info) === '[]' && <div className="nodata">暂无数据</div>}
   </Wrapper>
  )
})
