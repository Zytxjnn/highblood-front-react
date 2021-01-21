import DataOverView from '../pages/dataOverview';
import dataReporting from '../pages/dataReporting';
import dataCharts from '../pages/dataCharts';

import controlIndex from '@/pages/controlIndex'

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
  },
  {
    path:'/dataCharts',
    exact:true,
    component:dataCharts
  },
  {
    path:'/controlIndex',
    exact:true,
    component:controlIndex
  }
]

export default router;

