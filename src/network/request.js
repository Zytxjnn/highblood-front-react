import Axios from 'axios';

const dataOverview = Axios.create({  // 数据概览第一页
  baseURL:'https://www.chinahc.org.cn/apidata'
})
const dataReporting = Axios.create({  // 数据概览第二页
  baseURL:'http://newhyper.chinahc.org.cn/api/v1/qc'
})
const dataCharts = Axios.create({  // 数据概览第二页质控分数排名和数据概览第三页
  baseURL:'http://hbqc.ccpmc.org/QualityControlIndex/'
})



export {
  dataOverview,
  dataReporting,
  dataCharts
}