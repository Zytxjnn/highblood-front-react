import {Map} from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  grade:1,  // 当前在哪个层级 1全国 2省 3市,
  comp_grade:1, // 指标详情，进行对比的层级 1 全国 2 省 3 市  4 医联体
  province:'',
  city:'',
  core_detail:{},
  start_time:'2020-11',
  end_time:'2020-11',
  show_core:true,
  core_name:'',
  hospital_joined_id:'',
  hospital_joined_name:'',
  hospital_id:'',
  hospital_name:''
})

function reducer(state = defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_PROVINCE:
      return state.set('province',action.province);
    case actionTypes.CHANGE_CITY:
      return state.set('city',action.city);
    case actionTypes.CHANGE_GRADE:
      return state.set('grade',action.grade);
    case actionTypes.CHANGE_CORE_DETAIL:
      return state.set('core_detail',action.core_detail);
    case actionTypes.CHANGE_START_TIME:
      return state.set('start_time',action.start_time);
    case actionTypes.CHANGE_END_TIME:
      return state.set('end_time',action.end_time);
    case actionTypes.CHANGE_SHOW_CORE:
      return state.set('show_core',action.show_core);
    case actionTypes.CHANGE_CORE_NAME:
      return state.set('core_name',action.core_name);
    case actionTypes.CHANGE_HOSPITAL_JOINED_ID:
      return state.set('hospital_joined_id',action.hospital_joined_id)
    case actionTypes.CHANGE_HOSPITAL_JOINED_NAME:
      return state.set('hospital_joined_name',action.hospital_joined_name);
    case actionTypes.CHANGE_HOSPITAL_ID:
      return state.set('hospital_id',action.hospital_id)
    case actionTypes.CHANGE_HOSPITAL_NAME:
      return state.set('hospital_name',action.hospital_name);
    case actionTypes.CHANGE_COMP_GRADE:
      return state.set('comp_grade',action.comp_grade);
    default:
      return state;
  }
}

export default reducer;