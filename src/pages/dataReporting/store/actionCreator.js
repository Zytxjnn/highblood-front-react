import * as actionTypes from './constants';

import {
  getCount,
  getCountByProvince,
  getCountByCity,
  getLogs,
  getLogsByProvince,
  getLogsByCity,
  getScoreList,
  getScoreListByProvince,
  getScoreListByCity
} from "@/network/dataReporting";


const changeCountAction = (all_count) => ({
  type:actionTypes.CHANGE_COUNT,
  all_count
})

export const getCountAction = () => {
  return dispatch => {
    dispatch(getCountStateAction(true));
    getCount().then(res => {
      dispatch(changeCountAction(res.data.data));
      dispatch(getCountStateAction(false));
    })
  }
}

export const getCountByProvinceAction = (province) => {
  return dispatch => {
    dispatch(getCountStateAction(true));
    getCountByProvince(province).then(res => {
      dispatch(changeCountAction(res.data.data));
      dispatch(getCountStateAction(false));
    })
  }
}

export const getCountByCityAction = (city) => {
  return dispatch => {
    dispatch(getCountStateAction(true));
    getCountByCity(city).then(res => {
      dispatch(changeCountAction(res.data.data));
      dispatch(getCountStateAction(false));
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

export const changLogsAction = (logs) => ({
  type:actionTypes.CHANGE_LOGS,
  logs,
})

export const getLogsAction = () => {
  return dispatch => {
    getLogs().then(res => {
      dispatch(changLogsAction(res.data.data))
    })
  }
}
export const getLogsByProvinceAction = (province) => {
  return dispatch => {
    getLogsByProvince(province).then(res => {
      dispatch(changLogsAction(res.data.data))
    })
  }
}
export const getLogsByCityAction = (city) => {
  return dispatch => {
    getLogsByCity(city).then(res => {
      dispatch(changLogsAction(res.data.data))
    })
  }
}
export const changScoreListAction = (score_list) => ({
  type:actionTypes.CHANGE_SCORE_LIST,
  score_list,
})


export const getScoreListAction = (area_type,data_type) => {
  return dispatch => {
    getScoreList(area_type,data_type).then(res => {
      dispatch(changScoreListAction(res.data.data.list))
    })
  }
}
export const getScoreListByProvinceAction = (area_type,data_type,province) => {
  return dispatch => {
    getScoreListByProvince(area_type,data_type,province).then(res => {
      dispatch(changScoreListAction(res.data.data))
    })
  }
}
export const getScoreListByCityAction = (area_type,data_type,city) => {
  return dispatch => {
    getScoreListByCity(area_type,data_type,city).then(res => {
      dispatch(changScoreListAction(res.data.data))
    })
  }
}

const changSubGradeAction = (sub_grade) => ({
  type:actionTypes.CHANGE_SUB_GRADE,
  sub_grade,
})
export const getSubGradeAction = (sub_grade) => {
  return dispatch => {
    dispatch(changSubGradeAction(sub_grade))
  }
}

const changRankStateAction = (rank_state) => ({
  type:actionTypes.CHANGE_RANK_STATE,
  rank_state,
})

export const getRankStatAction = (rank_state) => {
  return dispatch => {
    dispatch(changRankStateAction(rank_state))
  }
}

// 填报总数是否在加载
const getCountState = count_state => ({
  type:actionTypes.CHANGE_COUNT_STATE,
  count_state
});
export const getCountStateAction = count_state => {
  return dispatch => {
    dispatch(getCountState(count_state))
  }
}

// 补足缺少数据的城市
const getProvinceCity = city => ({
  type:actionTypes.CHANGE_PROVINCE_CITY,
  city
});
export const getProvinceCityAction = city => {
  return dispatch => {
    dispatch(getProvinceCity(city))
  }
}









