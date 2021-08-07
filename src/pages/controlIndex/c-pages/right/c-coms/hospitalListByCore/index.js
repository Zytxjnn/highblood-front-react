import React,{memo,useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Collapse } from 'antd';

import {
  Wrapper
} from './style';
import {
  getHospitalJoinedByCore,
  getHospitalJoinedByCoreByProvince,
  getHospitalJoinedByCoreByCity
} from '@/network/controlIndex';
import {
  getProvinceAction,
  getCityAction,
  getGradeAction,
  getShowCoreAction,
  getHospitalJoinedIdAction,
  getHospitalJoinedNameAction
} from '@/pages/controlIndex/store/actionCreator'

const { Panel } = Collapse;

export default memo(function (){
  const [hospitalJoinedList,setHospitalJoinedList] = useState({});
  const {core_name,grade,start,end,province,city} = useSelector(state => ({
    core_name:state.getIn(['controlIndex','core_name']),
    grade:state.getIn(['controlIndex','grade']),
    start:state.getIn(['controlIndex','start_time']),
    end:state.getIn(['controlIndex','end_time']),
    province:state.getIn(['controlIndex','province']),
    city:state.getIn(['controlIndex','city']),
  }));

  useEffect(() => {
    switch (grade){
      case 1:
        getHospitalJoinedByCore(start,end,core_name).then(res => {
          setHospitalJoinedList(res.data.data);
        })
      break;
      case 2:
        getHospitalJoinedByCoreByProvince(start,end,core_name,province).then(res => {
          setHospitalJoinedList(res.data.data);
        })
        break;
      case 3:
        getHospitalJoinedByCoreByCity(start,end,core_name,city).then(res => {
          setHospitalJoinedList(res.data.data);
        })
        break;
      default:break;
    }

  },[grade]);

  const dispatch = useDispatch();

  const onClick = (id,hospital,info,key) => {
    dispatch(getShowCoreAction(true));
    dispatch(getGradeAction(4));
    dispatch(getHospitalJoinedIdAction(id));
    dispatch(getHospitalJoinedNameAction(hospital));
    dispatch(getProvinceAction(info[0].province));
    dispatch(getCityAction(info[0].city));
  }

  return (
    <Wrapper>
      {JSON.stringify(hospitalJoinedList) !== '[]'  &&
          <Collapse defaultActiveKey={['1']} >
            {
              Object.keys(hospitalJoinedList).map(key => {
                return <Panel header={key+'('+hospitalJoinedList[key].length+'家)'} key={key} showArrow={false}>
                  <div className='sub-panel'>
                    {
                      hospitalJoinedList[key].map((item,index) => {
                        return <div key={index} className='hospital-item' onClick={() => onClick(item.hospital_id,item.hospital,hospitalJoinedList[key])}>
                          <div className='hospital-name'>{item.hospital}</div>
                          {item.all_count > 0 ? <div className="hospital-info">
                            <div className="item info">
                              <div className="rank">
                                <div className="info-title">排名</div>
                                <div className="info-data">
                                  {
                                    item.rank ? <div><span className="highlight">{item.rank}</span>/{item.count}</div> : '未认证'
                                  }
                                </div>
                              </div>
                              <div className="rank">
                                <div className="info-title">医联体</div>
                                <div className="info-data">
                                    <span className="highlight">
                                        {item.unit === 1 ? item.avg_time + '分钟' : item.unit == 2 ? item.pass_percent + '%' : item.all_count + '例'}
                                    </span>
                                </div>
                              </div>
                              <div className="rank">
                                <div className="info-title">全国</div>
                                <div className="info-data">
                                    <span className="highlight">
                                        {item.country_data}
                                    </span>{item.unit === 1 ? '分钟' : item.unit == 2 ? '%' : '例'}
                                </div>
                              </div>
                            </div>
                          </div> : <div>无数据</div>}
                        </div>
                      })
                    }
                  </div>
                </Panel>
              })
            }
          </Collapse>
     }
    {
      hospitalJoinedList.length === 0 && <div className="nodata">该地区暂无数据</div>
    }
    </Wrapper>
  )
});