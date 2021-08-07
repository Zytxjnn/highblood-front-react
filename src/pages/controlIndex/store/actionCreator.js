import * as actionTypes from './constants';

import {
  getCoreDetail,
  getCoreDetailByProvince,
  getCoreDetailByCity,
  getCoreDetailByJoined,
  getCoreDetailByHospital
} from "@/network/controlIndex";

// 指标详情
const changeCoreDetailAction = (res) => ({
  type:actionTypes.CHANGE_CORE_DETAIL,
  core_detail:res
})
export const getCoreDetailAction = (start,end) => {
  return dispatch => {
    getCoreDetail(start,end).then(res => {
      dispatch(changeCoreDetailAction(res.data.data));
    })
  }
};
export const getCoreDetailByProvinceAction = (start,end,province) => {
  return dispatch => {
    getCoreDetailByProvince(start,end,province).then(res => {
      dispatch(changeCoreDetailAction(res.data.data));
    })
  }
};
export const getCoreDetailByCityAction = (start,end,city) => {
  return dispatch => {
    getCoreDetailByCity(start,end,city).then(res => {
      dispatch(changeCoreDetailAction(res.data.data));
    })
  }
};
export const getCoreDetailByJoinedAction = (start,end,hospital_joined_id) => {
  return dispatch => {
    getCoreDetailByJoined(start,end,hospital_joined_id).then(res => {
      dispatch(changeCoreDetailAction(res.data.data));
    })
  }
};
export const getCoreDetailByHospitalAction = (start,end,hospital_id) => {
  return dispatch => {
    getCoreDetailByHospital(start,end,hospital_id).then(res => {
      dispatch(changeCoreDetailAction(res.data.data));
    })
  }
};


// 开始时间
const changeStartTimeAction = (start_time) => ({
  type:actionTypes.CHANGE_START_TIME,
  start_time:start_time
});
export const getStartTimeAction = start_time => {
  return dispatch => {
    dispatch(changeStartTimeAction(start_time));
    dispatch(changeEndTimeAction(start_time));
  }
}
// 结束时间
const changeEndTimeAction = (end_time) => ({
  type:actionTypes.CHANGE_END_TIME,
  end_time:end_time
});
export const getEndTimeAction = end_time => {
  return dispatch => {
    dispatch(changeEndTimeAction(end_time));
  }
}


// 是否显示指标
const changeShowCoreAction = (show_core) => ({
  type:actionTypes.CHANGE_SHOW_CORE,
  show_core
});
export const getShowCoreAction = show_core => {
  return dispatch => {
    dispatch(changeShowCoreAction(show_core));
  }
}

// 当前指标名称
const changeCoreNameAction = (core_name) => ({
  type:actionTypes.CHANGE_CORE_NAME,
  core_name
});
export const getCoreNameAction = core_name => {
  return dispatch => {
    dispatch(changeCoreNameAction(core_name));
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

// 医联体和医院id
export const changHospitalJoinedIdAction = (hospital_joined_id) => ({
  type:actionTypes.CHANGE_HOSPITAL_JOINED_ID,
  hospital_joined_id,
});
export const changHospitalIdAction = (hospital_id) => ({
  type:actionTypes.CHANGE_HOSPITAL_ID,
  hospital_id,
});
export const getHospitalJoinedIdAction = (hospital_joined_id) => {
  return dispatch => {
    dispatch(changHospitalJoinedIdAction(hospital_joined_id));
  }
}
export const getHospitalIdAction = (hospital_id) => {
  return dispatch => {
    dispatch(changHospitalIdAction(hospital_id));
  }
}

// 医联体和医院名称
const changHospitalJoinedNameAction = (hospital_joined_name) => ({
  type:actionTypes.CHANGE_HOSPITAL_JOINED_NAME,
  hospital_joined_name,
});
const changHospitalNameAction = (hospital_name) => ({
  type:actionTypes.CHANGE_HOSPITAL_NAME,
  hospital_name,
});
export const getHospitalJoinedNameAction = (hospital_joined_name) => {
  return dispatch => {
    dispatch(changHospitalJoinedNameAction(hospital_joined_name));
  }
}
export const getHospitalNameAction = (hospital_name) => {
  return dispatch => {
    dispatch(changHospitalNameAction(hospital_name));
  }
}

// 指标详情对比的层级
const changeCompGradeAction = (comp_grade) => ({
  type:actionTypes.CHANGE_COMP_GRADE,
  comp_grade
});
export const getCompGradeAction = (comp_grade) => {
  return dispatch => {
    dispatch(changeCompGradeAction(comp_grade));
  }
}






