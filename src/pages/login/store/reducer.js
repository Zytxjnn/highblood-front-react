import { Map } from 'immutable';

import * as actionType from './constants'

const defaultStates = Map({
  token:'', // token和user在同一层级，方便取用
  user:{},
  account:{ // 登录页记住密码
    username:'',
    password:''
  }
})

function reducer(state = defaultStates,action){
  switch (action.type){
    case actionType.CHANGE_TOKEN:
      return state.set('token',action.token)
    case actionType.CHANGE_USER:
      return state.set('user',action.user)
    case actionType.CHANGE_ACCOUNT:
      return state.set('account',action.account)
    default:
      return state;
  }
}

export default reducer;
