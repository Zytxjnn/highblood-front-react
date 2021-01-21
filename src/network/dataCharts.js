import {dataCharts as axios} from '@/network/request';
import Qs from 'qs';


// 数据概览第三页图表
export const getCoreDetailForDataView = () => {

  return axios.post(
    '/getCoreDetailForDataView',
    Qs.stringify({
      area_type:1,
    })
  )
}
export const getCoreDetailForDataViewByProvince = (province) => {
  return axios.post(
    '/getCoreDetailForDataView',
    Qs.stringify({
      area_type:2,
      province
    })
  )
}
export const getCoreDetailForDataViewByCity = (city) => {
  return axios.post(
    '/getCoreDetailForDataView',
    Qs.stringify({
      area_type:3,
      city
    })
  )
}