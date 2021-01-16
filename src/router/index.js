import DataOverView from '../pages/dataOverview';
import dataReporting from '../pages/dataReporting';

const router = [
  {
    path:'/',
    exact:true,
    component:DataOverView
  },
  {
    path:'/dataReporting',
    exact:true,
    component:dataReporting
  }
]

export default router;

