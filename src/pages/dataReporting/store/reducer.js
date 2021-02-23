import {Map} from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  grade:1,  // 当前在哪个层级 1全国 2省 3市
  province:'',
  city:'',
  all_count:{},
  count_state:true,
  logs:[],
  score_list:[],
  sub_grade:1,
  rank_state:'province',
})

function reducer(state = defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_CONTENT:
      return state.set('content',action.content);
    case actionTypes.CHANGE_PROVINCE:
      return state.set('province',action.province);
    case actionTypes.CHANGE_CITY:
      return state.set('city',action.city);
    case actionTypes.CHANGE_GRADE:
      return state.set('grade',action.grade);
    case actionTypes.CHANGE_COUNT:
      return state.set('all_count',action.all_count);
    case actionTypes.CHANGE_LOGS:
      return state.set('logs',action.logs);
    case actionTypes.CHANGE_SCORE_LIST:
      return state.set('score_list',action.score_list);
    case actionTypes.CHANGE_SUB_GRADE:
      return state.set('sub_grade',action.sub_grade);
    case actionTypes.CHANGE_RANK_STATE:
      return state.set('rank_state',action.rank_state);
    case actionTypes.CHANGE_COUNT_STATE:
      return state.set('count_state',action.count_state);
    default:
      return state;
  }
}

export default reducer;