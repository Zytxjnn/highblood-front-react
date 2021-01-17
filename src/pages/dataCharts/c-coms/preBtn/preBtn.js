import React,{memo,useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import {useLocation} from 'react-router-dom';

import {
  Wrapper
} from "./style";



export default memo(function (props){

  let path = '/dataReporting';


  return <Wrapper>
    <NavLink to={path} />
  </Wrapper>
})