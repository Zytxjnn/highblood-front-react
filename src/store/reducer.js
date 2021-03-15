import {combineReducers} from 'redux-immutable';

import {reducer as dataOverviewReducer} from '../pages/dataOverview/store'
import {reducer as dataReportingReducer} from '../pages/dataReporting/store'
import {reducer as controlIndexReducer} from '../pages/controlIndex/store';
import {reducer as userReducer} from '../pages/login/store';

const cReducer = combineReducers({
  dataOverview:dataOverviewReducer,
  dataReporting:dataReportingReducer,
  controlIndex:controlIndexReducer,
  user:userReducer
})

export default cReducer
