import React,{memo} from 'react';


import Rank from './components/rank'

import {
  LeftWrapper
} from './style'

export default memo(function Left(){



  return(
    <LeftWrapper>
      <Rank />

    </LeftWrapper>
  )
});