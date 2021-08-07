import {dataReporting as axios,controlIndex } from "./request";
import Axios from "axios";
import Qs from 'qs';

// 地图上方三个数字
export const getCount = () => {
  return axios({
    url:'/count',
  })
}
export const getCountByProvince = (province) => {
  return axios({
    url:'/count',
    params:{
      province
    }
  })
}
export const getCountByCity = (city) => {
  return axios({
    url:'/count',
    params:{
      city
    }
  })
}

// 实时在线操作记录
export const getLogs = () => {
  return axios({
    url:'/record',
  })
}
export const getLogsByProvince = (province) => {
  return axios({
    url:'/record',
    params:{
      province
    }
  })
}
export const getLogsByCity = (city) => {
  return axios({
    url:'/record',
    params:{
      city
    }
  })
}

// 质控分数排名
export const getScoreList = (area_type,data_type) => {
  return controlIndex.post(
    '/QualityControlScore/getScoreList',
    Qs.stringify({
      area_type,
      data_type
    }),
  )
}


export const getScoreListByProvince = (area_type,data_type,province) => {
  return controlIndex.post(
    '/QualityControlScore/getScoreList',
    Qs.stringify({
      area_type,
      data_type,
      province
    })
  )
}

export const getScoreListByCity = (area_type,data_type,city) => {
  return controlIndex.post(
    '/QualityControlScore/getScoreList',
    Qs.stringify({
      area_type,
      data_type,
      city
    })
  )
}

// 填报总数排名
export const getRank = () => {
  return axios({
    url:'/rank',
  })
}
export const getRankByProvince = (province) => {
  return axios({
    url:'/rank',
    params:{
      province
    }
  })
}
export const getRankCity = (city) => {
  return axios({
    url:'/rank',
    params:{
      city
    }
  })
}






