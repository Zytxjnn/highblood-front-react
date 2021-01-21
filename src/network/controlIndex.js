import {controlIndex,dataOverview as dataOverview,dataReporting as dataReporting} from "@/network/request";

import Qs from 'qs';


// 指标详情
export const getCoreDetail = (start,end) => {  // 全国
  return controlIndex.post(
'/QualityControlIndex/getCoreDetail',
    Qs.stringify({
      area_type:1,
      start,
      end
    })
  )
};
export const getCoreDetailByProvince = (start,end,province) => {  // 省
  return controlIndex.post(
    '/QualityControlIndex/getCoreDetail',
    Qs.stringify({
      area_type:2,
      start,
      end,
      province
    })
  )
};
export const getCoreDetailByCity = (start,end,city) => {  // 市
  return controlIndex.post(
    '/QualityControlIndex/getCoreDetail',
    Qs.stringify({
      area_type:3,
      start,
      end,
      city
    })
  )
};
export const getCoreDetailByJoined = (start,end,hospital_joined_id) => {  // 医联体
  return controlIndex.post(
    '/QualityControlIndex/getCoreDetail',
    Qs.stringify({
      area_type:4,
      start,
      end,
      hospital_joined_id
    })
  )
};
export const getCoreDetailByHospital = (start,end,hospital_id) => {  // 医院
  return controlIndex.post(
    '/QualityControlIndex/getCoreDetail',
    Qs.stringify({
      area_type:5,
      start,
      end,
      hospital_id
    })
  )
};

// 搜索医院列表
export const getHospitalJoinedList = () => {  // 全国
  return controlIndex.post(
    '/Hospital/getHospitalJoinedList',
    Qs.stringify({
      area_type:1,
    })
  )
};
export const getHospitalJoinedListByProvince = (province) => {  // 省
  return controlIndex.post(
    '/Hospital/getHospitalJoinedList',
    Qs.stringify({
      area_type:2,
      province
    })
  )
};
export const getHospitalJoinedListByCity = (city) => {  // 市
  return controlIndex.post(
    '/Hospital/getHospitalJoinedList',
    Qs.stringify({
      area_type:3,
      city
    })
  )
};

// 指标信息
export const getCoreRank = (start,end,province) => {  // 省和国对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:1,
      data_type:1,
      province,
      start,
      end
    })
  )
};
export const getCoreRankCityAndChina = (start,end,city) => {  // 市和国对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:1,
      data_type:2,
      city,
      start,
      end
    })
  )
};
export const getCoreRankHospitalJoinedAndChina = (start,end,hospital_joined_id) => {  // 医联体和国对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:1,
      data_type:3,
      hospital_joined_id,
      start,
      end
    })
  )
};
export const getCoreRankHospitalAndChina = (start,end,hospital_id) => {  // 医院和国对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:1,
      data_type:4,
      hospital_id,
      start,
      end
    })
  )
};
export const getCoreRankCityAndProvince = (start,end,city) => {  // 市和省对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:2,
      data_type:2,
      city,
      start,
      end
    })
  )
};
export const getCoreRankHospitalJoinedAndProvince = (start,end,hospital_joined_id) => {  // 医联体和省对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:2,
      data_type:3,
      hospital_joined_id,
      start,
      end
    })
  )
};
export const getCoreRankHospitalJoinedAndCity = (start,end,hospital_joined_id) => {  // 医联体和市对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:3,
      data_type:3,
      hospital_joined_id,
      start,
      end
    })
  )
};
export const getCoreRankHospitalAndProvince = (start,end,hospital_id) => {  // 医院和省对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:2,
      data_type:4,
      hospital_id,
      start,
      end
    })
  )
};
export const getCoreRankHospitalAndCity = (start,end,hospital_id) => {  // 医院和市对比
  return controlIndex.post(
    '/QualityControlIndex/getCoreRank',
    Qs.stringify({
      area_type:3,
      data_type:4,
      hospital_id,
      start,
      end
    })
  )
};


// 搜索医联体
export const getSearchHospital = (area_type,hospital_joined_name) => {
  return controlIndex.post(
    '/Hospital/getHospitalJoinedList',
    Qs.stringify({
      area_type,
      hospital_joined_name
    })
  )
};

// 某指标下的医联体
export const getHospitalJoinedByCore = (start,end,core_name) => { // 全国
  return controlIndex.post(
    '/QualityControlIndex/getHospitalJoinedListByCore',
    Qs.stringify({
      area_type:1,
      core_name,
      start,
      end
    })
  )
};
export const getHospitalJoinedByCoreByProvince = (start,end,core_name,province) => {  // 省
  return controlIndex.post(
    '/QualityControlIndex/getHospitalJoinedListByCore',
    Qs.stringify({
      area_type:2,
      core_name,
      start,
      end,
      province
    })
  )
};
export const getHospitalJoinedByCoreByCity = (start,end,core_name,city) => {  // 市
  return controlIndex.post(
    '/QualityControlIndex/getHospitalJoinedListByCore',
    Qs.stringify({
      area_type:3,
      core_name,
      start,
      end,
      city
    })
  )
};


// 质控评分
export const getScoreListByJoined = (start,end,hospital_joined_id) => { // 医联体
  return controlIndex.post('/QualityControlScore/getScoreInfo',
    Qs.stringify({
      data_type:1,
      hospital_joined_id,
      start,
      end,
    }))
}
export const getScoreListByHospital = (start,end,hospital_id) => { // 医院
  return controlIndex.post('/QualityControlScore/getScoreInfo',
    Qs.stringify({
      data_type:2,
      hospital_id,
      start,
      end,
  }))
}


// 认证时间
export const getTimeInfoByHospitalJoined = (name) => {
  return dataOverview({
    url:'/getTimeInfoByHospital',
    params:{
      name
    }
  })
}


// 近四月质控分数
export const getScoreListForHospitalJoined = (hospital_joined_id) => { // 医联体
  return controlIndex.post('/QualityControlScore/getScoreListForHospital',
    Qs.stringify({
      data_type:1,
      hospital_joined_id
    }))
};
export const getScoreListForHospital = (hospital_id) => { // 医联体
  return controlIndex.post('/QualityControlScore/getScoreListForHospital',
    Qs.stringify({
      data_type:2,
      hospital_id
    }))
}

// 近四月质控分数
export const getMonth6ByOrg = (org_id) => {
  return dataReporting({
    url:'/month',
    params:{
      type:1,
      org_id
    }
  })
};
export const getMonth6ByHospital = (org_id) => {
  return dataReporting({
    url:'/month',
    params:{
      type:2,
      org_id
    }
  })
};


// 获取医联体下的医院列表
export const getHospitalList = (hospital_joined_id) => {
  return controlIndex.post('/Hospital/getHospitalList',
    Qs.stringify({
      area_type:1,
      hospital_joined_id
    }))
}


