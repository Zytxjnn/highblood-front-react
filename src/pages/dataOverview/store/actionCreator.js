import * as actionTypes from './constants';

import {
  getData
} from '@/network/dataOverview';

const changeContentAction = (res) => ({
  type:actionTypes.CHANGE_CONTENT,
  content:res.content
});

export const getContentAction = () => {
  return dispatch => {
    getData().then(res => {
      dispatch(changeContentAction(res.data));
    })
  }
}