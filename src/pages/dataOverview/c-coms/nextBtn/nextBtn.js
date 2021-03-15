import React,{memo} from 'react';
import {useHistory} from 'react-router-dom';

import {
  Wrapper
} from "./style";



export default memo(function (props){
  const history = useHistory();

  const navTo = () =>{
      history.push('/dataReporting')
  }
  return <Wrapper onClick={() => {navTo()}} />

})
