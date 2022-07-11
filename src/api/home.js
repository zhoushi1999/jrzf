import request from '@/utils/request'
// 首页轮播图接口
export const rotationChart = () => { return request({ url: 'home/swiper' }) }
// 租房小组
export const getGroups = () => { return request({ url: 'home/groups' }) }
