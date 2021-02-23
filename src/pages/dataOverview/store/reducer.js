import {Map} from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  content:{},
  grade:1,  // 当前在哪个层级 1全国 2省 3市
  province:'',
  city:'',
  content_state:true,
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
    case actionTypes.CHANGE_CONTENT_STATE:
      return state.set('content_state',action.content_state);
    default:
      return state;
  }
}

export default reducer;