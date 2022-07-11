import request from '@/utils/request'
// 城市列表接口
export const getCiry = (level) => { return request({ url: '/area/city', params: { level } }) }
// 热门城市
export const cityHot = () => { return request({ url: '/area/hot' }) }
// 获取子级城市列表
export const cityChind = () => { return request({ url: '/area' }) }
// 获取房屋查询条件
export const housesCondition = (id = 'AREA|88cff55c-aaa4-e2e0') => { return request({ url: '/houses/condition', params: { id } }) }
// 根据城市名称查询该城市信息
export const areaInfo = (name = '北京') => { return request({ url: '/area/info', params: { name } }) }
// 根据条件查询房屋
export const housesData = (cityid = 'AREA|88cff55c-aaa4-e2e0') => {
  return request({ url: '/houses', params: { cityid } })
}
