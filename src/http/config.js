
import { baseUrl } from '@/utils/global'

export default {
  method: 'get',
  // 基础url前缀
  baseUrl: baseUrl,
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Content-Security-Policy": "frame-ancestors 'self' https://www.baidu.com/"

  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 300000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: 'json'
}
