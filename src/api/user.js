import request from '@/utils/request'
export const getLogin = (body) => {
  return request({ url: '/user/login', method: 'POST', data: { ...body } })
}
// 用户信息
export const getUser = () => {
  return request({ url: '/user' })
}
