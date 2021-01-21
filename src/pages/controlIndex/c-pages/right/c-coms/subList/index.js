import React,{memo,useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {
  Wrapper,
} from './style';
import {
  getCoreDetailByProvinceAction,
  getCoreDetailByCityAction,
  getCoreDetailByJoinedAction,
  getCoreNameAction,
  getShowCoreAction
} from '@/pages/controlIndex/store/actionCreator';
import {
  getCoreRank,
  getCoreRankCityAndChina,
  getCoreRankHospitalJoinedAndChina,
  getCoreRankHospitalAndChina,
  getCoreRankHospitalAndProvince,
  getCoreRankHospitalAndCity,
  getCoreRankHospitalJoinedAndProvince,
  getCoreRankHospitalJoinedAndCity,
  getCoreRankCityAndProvince,
  getCoreDetail,
  getCoreDetailByProvince,
  getCoreDetailByCity
} from '@/network/controlIndex'

// import icon1 from '@/assets/imgs/qualityIndicators/icons/1.png';
import icon1 from '@/assets/imgs/qualityIndicators/icons/1.png';
import icon2 from '@/assets/imgs/qualityIndicators/icons/2.png';
import icon3 from '@/assets/imgs/qualityIndicators/icons/3.png';
import icon4 from '@/assets/imgs/qualityIndicators/icons/4.png';
import icon5 from '@/assets/imgs/qualityIndicators/icons/5.png';
import icon6 from '@/assets/imgs/qualityIndicators/icons/6.png';
import icon7 from '@/assets/imgs/qualityIndicators/icons/7.png';
import icon8 from '@/assets/imgs/qualityIndicators/icons/8.png';
import icon9 from '@/assets/imgs/qualityIndicators/icons/9.png';


export default memo(function (){
  const [rank,setRank] = useState({});
  const [compaDate,setCompaDate] = useState({});
  const {core_detail,grade,start,end,province,city,hospital_joined_id,hospital_id,comp_grade} = useSelector(state => ({
    core_detail:state.getIn(['controlIndex','core_detail']),
    province:state.getIn( ['controlIndex','province']),
    city:state.getIn(['controlIndex','city']),
    grade:state.getIn(['controlIndex','grade']),
    start:state.getIn(['controlIndex','start_time']),
    end:state.getIn(['controlIndex','end_time']),
    hospital_joined_id:state.getIn(['controlIndex','hospital_joined_id']),
    hospital_id:state.getIn(['controlIndex','hospital_id']),
    comp_grade:state.getIn(['controlIndex','comp_grade']),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    switch (grade){
      case 2: // 省
        dispatch(getCoreDetailByProvinceAction(start,end,province));
        // getCoreRank(start,end,province).then(res => { // 排名信息
        //   setRank(res.data.data);
        // })
        break;
      case 3: // 市
        dispatch(getCoreDetailByCityAction(start,end,city));
        // getCoreRankCityAndChina(start,end,city).then(res => { // 比较数据
        //   setRank(res.data.data);
        // })
        break;
      case 4: // 医联体
        dispatch(getCoreDetailByJoinedAction(start,end,hospital_joined_id));
        // getCoreRankHospitalJoinedAndChina(start,end,hospital_joined_id).then(res => { // 排名信息
        //   setRank(res.data.data);
        // });
        break;
      case 5: // 医院
        break;
      default:
        break;
    }
  },[grade,start]);

  useEffect(() => {
    switch (comp_grade){
      case 1:
        switch (grade){
          case 2:
            getCoreRank(start,end,province).then(res => { // 省-国
              setRank(res.data.data);
            });
          break;
          case 3:
            getCoreRankCityAndChina(start,end,city).then(res => { // 市-国
              setRank(res.data.data);
            });
            break;
          case 4:
            getCoreRankHospitalJoinedAndChina(start,end,hospital_joined_id).then(res => { // 医联体-国
              setRank(res.data.data);
            });
            break;
          case 5:
            getCoreRankHospitalAndChina(start,end,hospital_id).then(res => { // 医院-国
              setRank(res.data.data);
            });
          break;
          default:break;
        }
        getCoreDetail(start,end).then(res => {
          setCompaDate(res.data.data);
        });
        break;
      case 2:
        switch (grade){
          case 3: // 市-省
            getCoreRankCityAndProvince(start,end,city).then(res => {
              setRank(res.data.data);
            })
            break;
          case 4: // 医联体-省
            getCoreRankCityAndProvince(start,end,city).then(res => {
              setRank(res.data.data);
            })
            break;
          case 5: // 医院-省
            getCoreRankHospitalAndProvince(start,end,hospital_id).then(res => {
              setRank(res.data.data);
            })
            break;
          default:break;
        }

        getCoreDetailByProvince(start,end,province).then(res => {
          setCompaDate(res.data.data);
        });
        break;
      case 3:
        switch (grade){
          case 4: // 医联体-市
            getCoreRankHospitalJoinedAndCity(start,end,hospital_joined_id).then(res => {
              setRank(res.data.data);
            })
            break;
          case 5: // 医院-市
            getCoreRankHospitalAndCity(start,end,hospital_joined_id).then(res => {
              setRank(res.data.data);
            })
            break;
          default:break;
        }
        getCoreDetailByCity(start,end,city).then(res => {
          setCompaDate(res.data.data);
        });
        break;
      default: break;
    }
  },[comp_grade,grade]);

  const onClick = (core_name) => {
    dispatch(getCoreNameAction(core_name));
    dispatch(getShowCoreAction(false));
  }

  return (
    <Wrapper>
      <div className="sub-list">
        {
          core_detail  && JSON.stringify(rank) !== '{}' && JSON.stringify(compaDate) !== '{}' && Object.keys(core_detail).map((key,index) => {
            return (
                <div className='sub-item' key={key} onClick={() => {onClick(key)}}>
                    <div className="left">
                      <div className="top">{index+1}.{core_detail[key].core_name}</div>
                      {
                        core_detail[key].all_count > 0 ? <div className="bot">
                          {
                            rank[key] ? <div className="item">
                              <div>
                                <span className='highlight'>{rank[key].rank}</span>
                                /{rank[key].count}
                              </div>
                              <div>排名</div>
                            </div> : <div>无数据</div>
                          }
                          <div className="item">
                            <div>
                              <span className="highlight">{compaDate[key].unit === 1 ? compaDate[key].avg_time : compaDate[key].unit===2 ? compaDate[key].pass_percent:compaDate[key].all_count}</span>
                              {core_detail[key].unit === 1 ? '分钟' : core_detail[key].unit===2 ? '%' : '例'}
                            </div>
                            <div>
                              {comp_grade === 1 && '全国'}
                              {comp_grade === 2 && '全省'}
                              {comp_grade === 3 && '全市'}
                            </div>
                          </div>
                          <div className="item">
                            <div>
                            <span className='highlight'>
                              {core_detail[key].unit === 1 ? core_detail[key].avg_time : core_detail[key].unit===2 ? core_detail[key].pass_percent:core_detail[key].all_count}
                            </span>
                              {core_detail[key].unit === 1 ? '分钟' : core_detail[key].unit===2 ? '%' : '例'}
                            </div>
                            <div>
                              {grade === 2 && '本省'}
                              {grade === 3 && '本市'}
                              {grade === 4 && '医联体'}
                              {grade === 5 && '医院'}
                            </div>
                          </div>
                        </div> : '无数据'
                      }
                    </div>
                    <div className="right">
                      {index === 0 && <img src={icon1} alt='404' />}
                      {index === 1 && <img src={icon2} alt='404' />}
                      {index === 2 && <img src={icon3} alt='404' />}
                      {index === 3 && <img src={icon4} alt='404' />}
                      {index === 4 && <img src={icon5} alt='404' />}
                      {index === 5 && <img src={icon6} alt='404' />}
                      {index === 6 && <img src={icon7} alt='404' />}
                      {index === 7 && <img src={icon8} alt='404' />}
                      {index === 8 && <img src={icon9} alt='404' />}
                    </div>
                </div>
            )
          })
        }
      </div>
    </Wrapper>
  )
});


