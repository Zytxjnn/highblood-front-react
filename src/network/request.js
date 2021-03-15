import Axios from 'axios';
import axios from "axios";
const token = localStorage.getItem('token');


// Axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   console.log(response)
//   return response;
// }, function (error) {
//   // Do something with response error
//   console.log(error)
//   return Promise.reject(error);
// });

const dataOverview = Axios.create({  // 数据概览第一页
  baseURL:'https://www.chinahc.org.cn/apidata'
})
const dataReporting = Axios.create({  // 数据概览第二页
  baseURL:'https://newhyper.chinahc.org.cn/api/v1/qc'
})
const dataCharts = Axios.create({  // 数据概览第三页
  baseURL:'http://hbqc.ccpmc.org/QualityControlIndex',
  headers:{
    'Auth-Token':token
  }
})
const controlIndex = Axios.create({  // 质控指标
  baseURL:'http://hbqc.ccpmc.org',
  headers:{
    'Auth-Token':token
  }
})




const login = Axios.create({  // 登录
  baseURL:'http://hbqc.ccpmc.org/Login',
})



export {
  dataOverview,
  dataReporting,
  dataCharts,
  controlIndex,
  login
}
