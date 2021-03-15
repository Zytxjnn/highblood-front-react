import * as actionTypes from './constants';


const changeTokenAction = token => ({
  type:actionTypes.CHANGE_TOKEN,
  token
})

export const getTokenAction = (token) => {  // 登录成功，本地和redux保存token
  return dispatch => {
    localStorage.setItem('token',token);
    dispatch(changeTokenAction(token));
  }
}
export const removeTokenAction = () => {  //
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(changeTokenAction(''));
  }
}


const changeUserAction = user => ({
  type:actionTypes.CHANGE_USER,
  user
})
export const getUserAction = user => {  // 登录成功，本地和redux保存user
  return dispatch => {
    localStorage.setItem('user',JSON.stringify(user))
    dispatch(changeUserAction(user));
  }
}
export const removeUserAction = () => {  // 退出登录，清除本地和redux的user
  return dispatch => {
    localStorage.removeItem('user')
    dispatch(changeUserAction({}));
  }
}


// 记住密码
const changeSaveAccount = account => ({
  type:actionTypes.CHANGE_ACCOUNT,
  account
})
export const getAccountAction = account => {
  return  dispatch => {
    dispatch(changeSaveAccount(account))
  }
}



