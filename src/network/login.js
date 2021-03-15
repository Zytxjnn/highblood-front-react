import { login } from './request';
import Qs from 'qs';
import Axios from "axios";

// 通过联盟区域账号登录
export const loginByRegionAccount = (user_account,password) => {
  return  Axios.post(
    'http://hbqc.ccpmc.org/Login/LoginByRegionAccount',
    Qs.stringify({
      user_account,
      password
    })
  )
}

// 通过填报平台账号登录
export const loginByFillingAccount = (user_account,password) => {
  return  login.post(
    '/LoginByFillingAccount',
    Qs.stringify({
      user_account,
      password
    })
  )
}




