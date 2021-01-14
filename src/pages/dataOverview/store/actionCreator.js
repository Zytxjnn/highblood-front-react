import * as actionTypes from './constants';

import {
  getData,
  getDataByProvince,
  getDataByCity
} from "@/network/dataOverview";

const changeContentAction = (res) => ({
  type:actionTypes.CHANGE_CONTENT,
  content:res.content
});

export const getContentAction = () => {
  return dispatch => {
    getData().then(res => {
      dispatch(changeContentAction(res.data));
    })
  }
}

export const getContentByProvinceAction = (province) => {
  return dispatch => {
    getDataByProvince(province).then(res => {
      dispatch(changeContentAction(res.data));
    })
  }
}

export const getContentByCityAction = (province,city) => {
  return dispatch => {
    getDataByCity(province,city).then(res => {
      dispatch(changeContentAction(res.data));
    })
  }
}

export const changeProvinceAction = (province) => ({
  type:actionTypes.CHANGE_PROVINCE,
  province,
})

export const getProvinceAction = (province) => {
  return dispatch => {
    dispatch(changeProvinceAction(province));
  }
}

export const changCityAction = (city) => ({
  type:actionTypes.CHANGE_CITY,
  city,
})

export const getCityAction = (city) => {
  return dispatch => {
    dispatch(changCityAction(city));
  }
}

export const changGradeAction = (grade) => ({
  type:actionTypes.CHANGE_GRADE,
  grade,
})

export const getGradeAction = (grade) => {
  return dispatch => {
    dispatch(changGradeAction(grade));
  }
}
