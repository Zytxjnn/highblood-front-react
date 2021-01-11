import React,{memo} from "react";
import { renderRoutes } from 'react-router-config';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./store";
import routers from "./router";

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routers)}
      </BrowserRouter>
    </Provider>
  );
})


