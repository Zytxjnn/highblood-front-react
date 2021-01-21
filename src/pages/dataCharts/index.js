import React,{memo,useEffect,useState} from "react";
import {shallowEqual, useSelector} from "react-redux";

import * as echarts from 'echarts';
import DataHeader from '@/components/dataHeader/';
import {
    Wrapper
} from "@/pages/dataCharts/style";
import {
  getCoreDetailForDataView,
  getCoreDetailForDataViewByProvince,
  getCoreDetailForDataViewByCity
} from '@/network/dataCharts'
import PreBtn from './c-coms/preBtn/preBtn';
import SideBar from '@/components/sideBar';


export default memo(function DataCharts(props){

  const [Options,setOptions] = useState([]);
  const option = {
    grid:{
      height:'65%',
      bottom:'10%',
      left:'15%',

    },
    title:{
      show:true,
      text:'1.高血压整治例数',
      textStyle:{
        color:'#FFF',
        fontWeight:'400',
        fontSize:18,

      },
      padding:[
        15,1000,15,20
      ],
      backgroundColor:'#3A3D75'
    },
    xAxis: {
      type: 'category',
      name:'月',
      data: ['19.04', '05', '06', '07','08', '09', '10', '11', '12','01', '02','20.04'],
      axisLabel:{
        interval:0,

        color:(e) => {
          return e.length > 2 ? '#19B0FF' :'#D6D7ED'
        },

      },
      axisLine:{
        lineStyle:{
          color:'#9A9CB8'
        }
      },
      axisTick:{
        show:false
      },
      nameTextStyle:{
        color:'#D6D7ED'
      }
    },
    tooltip:{
      show:true,
      trigger:'axis',
      formatter:'',
      borderColor:'#000'
    },
    yAxis: [
      {
        type: 'value',
        name: '例',
        axisLabel:{
          color:'#D6D7ED'
        },
        axisLine:{
          lineStyle:{
            color:'#9A9CB8'
          }
        },
        axisTick:{
          show:false
        },
        splitLine:{
          show:false
        },
        nameTextStyle:{
          color:'#D6D7ED'
        },
      },
      {
        type: 'value',
        name: '例',
        axisLabel:{
          color:'#D6D7ED'
        },
        axisLine:{
          lineStyle:{
            color:'#9A9CB8'
          }
        },
        axisTick:{
          show:false
        },
        splitLine:{
          show:false
        },
        nameTextStyle:{
          color:'#D6D7ED'
        },
      },
    ],
    legend: {
      data: ['蒸发量', '平均温度']
    },
    series: [
      {
        data: [1200, 2000, 1500, 800, 700, 1100, 1300,4100, 2000, 3500, 800, 700],
        type: 'bar',
        barWidth:10,
        itemStyle:{
          normal:{
            color:() => {
              const colorList = ['rgba(178, 242, 181, 1)','rgba(53, 186, 255, 1)','rgba(73, 126, 234, 1)'];
              let colorIndex = Math.round(Math.random()*2);
              if(OcolorIndex.length >= 12){
                OcolorIndex = [];
              }
              OcolorIndex.push(colorList[colorIndex]);
              return colorList[colorIndex];
            },
            label:{
              show:true,
              position:'top',
              color:'#fff'
            },
            barBorderRadius:[10,10,0,0]
          }
        },
        label:{
          color:'#fff'
        },
        showBackground: true,
        backgroundStyle: {
          barBorderRadius:[10,10,0,0]
        }
      },
      {
        // show:false,
        type: 'line',
        symbolSize: 0, // symbol的大小设置为0
        showSymbol: false, // 不显示symbol
        lineStyle: {
          width: 0, // 线宽是0
          color: 'rgba(0, 0, 0, 0)' // 线的颜色是透明的
        },
        data: [1000, 1200, 1400, 1600, 1000, 2000, 1200, 3600, 1000, 2000, 1000, 2000],
        // itemStyle : {
        //   normal : {
        //     color:'#fff',
        //     lineStyle:{
        //       color:'#fff'
        //     }
        //   }
        // },
        // clip:true
      },
    ]
  };
  const colorList = ['rgba(178, 242, 181, 0.3)','rgba(53, 186, 255, 0.3)','rgba(73, 126, 234, 0.3)'];
  let OcolorIndex = [];
  const {province,city,grade} = useSelector(state => ({
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city']),
    grade:state.getIn(['dataReporting','grade']),
  }),shallowEqual);

  useEffect(() => {

    switch (grade){
      case 1:
        getCoreDetailForDataView().then(res => {
          setOptions(res.data.data);
        });
        break;
      case 2:
        getCoreDetailForDataViewByProvince(province).then(res => {
          setOptions(res.data.data);
        });
        break;
      case 3:
        getCoreDetailForDataViewByCity(city).then(res => {
          setOptions(res.data.data);
        });
        break;
      default:
        break;
    }

  },[]);


  useEffect(() => {
    if(JSON.stringify(Options) === '[]'){
      return;
    }
    for(let i in [0,1,2,3,4,5,6,7,8]){
      let chart = echarts.init(document.getElementsByClassName('charts-item')[i]);
      Options[i] && chart.setOption(getOption(i));
    }
  },[Options])

  const getOption = (i) =>{
    // 赋值
    option.title.text = Options[i].core_name;
    option.xAxis.data =   Options[i].x_list;
    option.series[0].data =  Options[i].y_left_list;
    option.series[1].data =  Options[i].y_right_list;
    option.yAxis[0].name =  Options[i].core_unit.left;
    // 统一左右两侧刻度
    const Max = calMax([Options[i].y_left_list])
    option.yAxis[0].max = Max + Max * 0.1;
    option.yAxis[0].min = 0;
    option.yAxis[0].interval = (Max + Max * 0.1) / 5;
    option.yAxis[1].max = Max;
    option.yAxis[1].interval = (Max + Max * 0.1) / 5;

    option.tooltip.formatter =  (data) => {
      const temp = Options[i].core_unit.unit === 2 ? '%' : '';
      return `
                  实际值:${Options[i].y_left_list[data[1].dataIndex]}${temp}</br>
                  标准值:${Options[i].y_right_list[data[1].dataIndex]}${temp}`
    }

    option.series[0].itemStyle.normal.label.formatter = (params) => {
        return Options[i].core_unit.unit === 2 ? params.data + '%' : params.data
    }
    return option;
  }

  const calMax = arr => {
    let max = 0;
    arr.forEach((el) => {
      el.forEach((el1) => {
        if (!(el1 === undefined || el1 === '')) {
          if (max < el1) {
            max = el1;
          }
        }
      })
    })
    let maxint = Math.ceil(max / 9);//不让最高的值超过最上面的刻度
    let maxval = maxint * 10;//让显示的刻度是整数
    return maxval;
  }



    return (
      <Wrapper>
        <DataHeader/>
        {
          JSON.stringify(Options) !== '[]' && <div id="charts">
            {
              [0,1,2,3,4,5,6,7,8].map(item => {
                return <div className='charts-item' key={item}>{item}</div>
              })
            }
          </div>
        }
        {
          JSON.stringify(Options) === '[]' && <div className="nodata">暂无数据</div>
        }
        <SideBar/>
        <PreBtn/>
      </Wrapper>
    )
})