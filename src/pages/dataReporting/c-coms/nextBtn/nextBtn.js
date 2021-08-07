import React,{memo,useEffect} from 'react';

import {useLocation,useHistory} from 'react-router-dom';

import {
  Wrapper
} from "./style";



export default memo(function (props){
  const location = useLocation();
  const history = useHistory();


  const navTo = () =>{
    const path = location.pathname;
    if(path === '/'){
      history.push('/dataReporting')
    }else{
      history.push('/dataCharts')
    }
  }
  return <Wrapper onClick={() => {navTo()}} />

})