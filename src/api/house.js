import request from '@/utils/request'
/**
 *
 * @param {传递的整个参数} params
 * @returns
 */
export const getHouse = (params) => {
  return request({
    url: '/houses',
    params: { params }
  })
}
