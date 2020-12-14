import Axios from 'axios'
// 自定义实例默认值
const instance = Axios.create({
   // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'http://localhost:8080/',
   // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 6000
});
// 请求拦截器
instance.interceptors.request.use(function (config) {
  // console.log('请求中')
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use(function (response) {
  // console.log('响应中')
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
const get = (url, data = null) => {
  return instance.get(url, data)
}
const post = (url, data = null) => {
  return instance.post(url, data)
}
export {
  get,
  post
}