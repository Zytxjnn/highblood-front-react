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
    dispatch(changeContentState(true));
    getData().then(res => {
      dispatch(changeContentState(false));
      dispatch(changeContentAction(res.data));
    })
  }
}
export const getContentByProvinceAction = (province) => {
  return dispatch => {
    dispatch(changeContentState(true));
    getDataByProvince(province).then(res => {
      dispatch(changeContentState(false));
      dispatch(changeContentAction(res.data));
    })
  }
}
export const getContentByCityAction = (province,city) => {
  return dispatch => {
    dispatch(changeContentState(true));
    getDataByCity(province,city).then(res => {
      dispatch(changeContentState(false));
      dispatch(changeContentAction(res.data));
    })
  }
}

// const changeProvinceAction = (province) => ({
//   type:actionTypes.CHANGE_PROVINCE,
//   province,
// })
//
// export const getProvinceAction = (province) => {
//   return dispatch => {
//     dispatch(changeProvinceAction(province));
//   }
// }
//
// const changCityAction = (city) => ({
//   type:actionTypes.CHANGE_CITY,
//   city,
// })
//
// export const getCityAction = (city) => {
//   return dispatch => {
//     dispatch(changCityAction(city));
//   }
// }
//
// const changGradeAction = (grade) => ({
//   type:actionTypes.CHANGE_GRADE,
//   grade,
// })
//
// export const getGradeAction = (grade) => {
//   return dispatch => {
//     dispatch(changGradeAction(grade));
//   }
// }

const changeContentState = content_state => ({
  type:actionTypes.CHANGE_CONTENT_STATE,
  content_state
})


const changeRankStateSate = rank_state => ({
  type:actionTypes.CHANGE_RANK_STATE,
  rank_state
})
export const getRankStateAction = rank_state => {
  return dispatch => {
    dispatch(changeRankStateSate(rank_state))
  }
}

