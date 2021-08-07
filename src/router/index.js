import React from 'react';

const DataOverView = React.lazy(() => import('../pages/dataOverview'));
const dataReporting = React.lazy(() => import('../pages/dataReporting'));
const dataCharts = React.lazy(() => import('../pages/dataCharts'));
const controlIndex = React.lazy(() => import('@/pages/controlIndex'));
const QualityControlReport = React.lazy(() => import('@/pages/QualityControlReport'));
const login = React.lazy(() => import('@/pages/login'));



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
  },
  {
    path:'/report',
    exact:true,
    component:QualityControlReport
  },
  {
    path:'/login',
    component:login
  }
];

export default router;

