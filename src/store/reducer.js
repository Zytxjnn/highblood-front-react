import {combineReducers} from 'redux-immutable';

import {reducer as dataOverviewReducer} from '../pages/dataOverview/store'

const cReducer = combineReducers({
  dataOverview:dataOverviewReducer
})

export default cReducer