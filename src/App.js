import React,{memo,Suspense} from "react";
import { renderRoutes } from 'react-router-config';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import Loading from '@/components/loading'

import store from "./store";
import routers from "./router";

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          {renderRoutes(routers)}
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
})


