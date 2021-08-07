import Axios from 'axios';
import {HashRouter} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


const dataOverview = Axios.create({  // 数据概览第一页
  baseURL:'https://www.chinahc.org.cn/apidata'
})
const dataReporting = Axios.create({  // 数据概览第二页
  baseURL:'https://newhyper.chinahc.org.cn/api/v1/qc'
})
const dataCharts = Axios.create({  // 数据概览第三页
  baseURL:'http://hbqc.ccpmc.org/QualityControlIndex'
})
const controlIndex = Axios.create({  // 质控指标
  baseURL:'http://hbqc.ccpmc.org'
})

dataCharts.interceptors.request.use(request => {
  const token = localStorage.getItem('token');
  if(token){
    request.headers['Auth-token'] = `${token}`;
  }
  return request;
})
controlIndex.interceptors.request.use(request => {
  const token = localStorage.getItem('token');
  if(token){
    request.headers['Auth-token'] = `${token}`;
  }
  return request;
})
dataCharts.interceptors.response.use(function (response) {
  const code = response.data.code;
  if(code === 401){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    const router = new HashRouter()
    router.history.go('/login')
  }
  return response;
},);
controlIndex.interceptors.response.use(function (response) {
  const code = response.data.code;
  if(code === 401){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    const router = new BrowserRouter()
    router.history.go('/login')
  }
  return response;
},);


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
