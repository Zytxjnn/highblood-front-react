import React,{memo,useEffect,useState,useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Progress } from 'antd'
import {
  Wrapper,
} from './style';
import {
  getScoreListAction,
  getSubGradeAction,
  getScoreListByProvinceAction,
  getScoreListByCityAction
} from '@/pages/dataReporting/store/actionCreator'



export default memo(function (props){

  const indexColor = ['#FFCB3D','#FB28F4','#32D6FF'];
  const [Count,setCount] = useState(100);
  const listRef = useRef();
  const {score_list,grade,sub_grade,province,city} = useSelector(state => ({
    score_list:state.getIn(['dataReporting','score_list']),
    grade:state.getIn(['dataReporting','grade']),
    sub_grade:state.getIn(['dataReporting','sub_grade']),
    province:state.getIn(['dataReporting','province']),
    city:state.getIn(['dataReporting','city'])
  }))


  const dispatch = useDispatch();

  useEffect(() => {
    switch (grade){
      case 1:
        dispatch(getScoreListAction(1,sub_grade));
        break;
      case 2:
        switch (sub_grade){
          case 1:
            dispatch(getScoreListAction(1,1));
            break;
          case 2:
            dispatch(getScoreListByProvinceAction(2,2,province));
            break;
          case 3:
            dispatch(getScoreListByProvinceAction(2,3,province));
            break;
          default:
            break;
        }
        break;
      case 3:
        switch (sub_grade){
          case 1:
            dispatch(getScoreListAction(1,1));
            break;
          case 2:
            dispatch(getScoreListByProvinceAction(2,2,province));
            break;
          case 3:
            dispatch(getScoreListByCityAction(3,3,city));
            break;
          default:
            break;
        }
        break;
      default:
      break;
    }
  },[grade,sub_grade])



  const subData = (Sub) => {
    listRef.current.scrollTop = 0;
    setCount(100);
    dispatch(getSubGradeAction(Sub));
  }

  const onListScorll = e => {
    const scrollTop = e.target.scrollTop;  // 滚动的高度
    const scrollHeight = e.target.scrollHeight;  // 容器总高度
    const clientHeight = e.target.clientHeight; // 容器可视高度
    if(scrollHeight-clientHeight-scrollTop <= 100){
      setCount(Count + 100);
    }
  }

  return (
    <Wrapper>
      <div className="title">质控分数排名</div>
      <div className="hover" />
      <div className="list" onScroll={e => onListScorll(e)} ref={listRef}>
        {
          score_list.length === 0 ? <div className='nodata'>暂无数据</div> :

          score_list.map((item,index) => {
            if(index >= Count) return;
            return (
              <div className='item' key={index}>
                <div className="item-area"><span style={{'color':index<=2 ? indexColor[index]:''}}>NO{index+1}.</span>{item.name}</div>
                <div className="item-progress">
                  <Progress percent={item.score}
                            status={"active"}
                            strokeColor={{
                              to:'#0477D5',
                              from:'#01D9FE'
                            }}
                            trailColor='#193F80'
                            showInfo={false}
                  />
                  <div className='score'>{item.score}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="option">
        <div className={sub_grade === 1 ? 'active' : ''} onClick={() => {subData(1)}}>省</div>
        <div className={sub_grade === 2 ? 'active' : ''} onClick={() => {subData(2)}}>市</div>
        <div className={sub_grade === 3 ? 'active' : ''} onClick={() => {subData(3)}}>医联体</div>
      </div>
    </Wrapper>
  )
})
