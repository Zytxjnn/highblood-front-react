import {dataOverview as axios} from "./request";

export const getData = () => {
  return axios({
    url:'/getNumInfoByProvince'
  })
}

export const getDataByProvince = province => {
  return axios({
    url:'/getNumInfoByProvince',
    params:{
      province
    }
  })
}

export const getDataByCity = city => {
  return axios({
    url:'/getNumInfoByProvince',
    params:{
      city
    }
  })
}