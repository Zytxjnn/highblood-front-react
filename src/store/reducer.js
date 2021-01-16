import {combineReducers} from 'redux-immutable';

import {reducer as dataOverviewReducer} from '../pages/dataOverview/store'
import {reducer as dataReportingReducer} from '../pages/dataReporting/store'

const cReducer = combineReducers({
  dataOverview:dataOverviewReducer,
  dataReporting:dataReportingReducer
})

export default cReducer