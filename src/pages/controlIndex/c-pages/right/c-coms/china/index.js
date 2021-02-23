import React,{memo,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
  Wrapper
} from './style';
import {
  getCoreDetailAction,
  getShowCoreAction,
  getCoreNameAction,
} from '@/pages/controlIndex/store/actionCreator'

export default memo(function (){
  const {core_detail,start,end} = useSelector(state => ({
    core_detail:state.getIn(['controlIndex','core_detail']),
    grade:state.getIn(['controlIndex','grade']),
    start:state.getIn(['controlIndex','start_time']),
    end:state.getIn(['controlIndex','end_time']),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoreDetailAction(start,end));
  },[start]);

  const onClick = (core_name) => {
    dispatch(getCoreNameAction(core_name));
    dispatch(getShowCoreAction(false));
  }

  return (
    <Wrapper>
      {
        JSON.stringify(core_detail) !== '{}' && Object.keys(core_detail).map((key,index) => {
          return <div key={key} className='item' onClick={() => {onClick(key)}}>
            <div className="info">
              <div className="title">{index+1}.&nbsp;{core_detail[key].core_name}</div>
              {
                core_detail[key].all_count !== 0 && <div className="count">
                  全国
                  {core_detail[key].unit === 3 && <span><span className="highlight">&nbsp;{core_detail[key].all_count}</span> 例</span>}
                  {core_detail[key].unit === 2 && <span><span className="highlight">&nbsp;{core_detail[key].pass_percent}</span> %</span>}
                  {core_detail[key].unit === 1 && <span><span className="highlight">&nbsp;{core_detail[key].avg_time}</span> 分钟</span>}
                </div>
              }
              {core_detail[key].all_count ===0  && <div>无数据</div>}
            </div>
          </div>
        })
      }
    </Wrapper>
  )
});