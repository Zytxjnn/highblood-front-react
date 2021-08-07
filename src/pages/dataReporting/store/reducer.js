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
  province_city:[]
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

        const city = state.get('province_city'),score_list = action.score_list,sub_grade = state.get('sub_grade'),grade = state.get('grade');
        if((city.length && sub_grade === 2 && grade === 2) || (city.length && sub_grade === 2 && grade === 3)){
          for(let c in city){
            if(score_list[c]){
              if(city[c].name !== score_list[c].name){
                city[c].score  = score_list[c].score
              }
            }
          }
          city.sort((a,b)=> {
            return b.score - a.score
          })
          return state.set('score_list',city);
        }
        // for(let c of city){
        //   if(city.length > 0){
        //     console.log(score_list)
        //     for(let i in city){
        //       console.log(city[i].name)
        //       if(city[i].name !== score_list[i].name){
        //         score_list.push(city[i])
        //       }
        //     }
        //   }
        // }
      // console.log(new Set(...state.get('score_list'),...state.get('province_city')))
      return state.set('score_list',action.score_list);
    case actionTypes.CHANGE_SUB_GRADE:
      return state.set('sub_grade',action.sub_grade);
    case actionTypes.CHANGE_RANK_STATE:
      return state.set('rank_state',action.rank_state);
    case actionTypes.CHANGE_COUNT_STATE:
      return state.set('count_state',action.count_state);
    case actionTypes.CHANGE_PROVINCE_CITY:
      return state.set('province_city',action.city);
    default:
      return state;
  }
}

export default reducer;
