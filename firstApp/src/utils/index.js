import axios from 'axios'

let baseURL = 'http://localhost:8080/';
//process.env.NODE_ENV环境 development开发环境        测试环境.....
// if (process.env.NODE_ENV === 'development') {
//     baseURL = 'http://132.232.87.95:3000/api'
// } else {
//     baseURL = 'http://132.232.87.95:3000/api'
// }  /login
//将URL地址前面相同的一段封装
const $http = axios.create({
  baseURL: baseURL
})
// 封装get
export const get = (url, params) => {
  params = params || {};
  return new Promise((resolve, reject) => {
    $http.get(url, {
      params,
    }).then(res => {
      if (res.data.status === 0) {
        resolve(res.data)
      } else {
        alert(res.data.msg)
      }
    }).catch(err => {
      alert('网络异常')
    })
  })
}
//封装post
export const post = (url, params) => {
  params = params || {};
  return new Promise((resolve, reject) => {
    $http.post(url,
      params
    ).then(res => {
      resolve(res.data)
    }).catch(err => {
      alert('网络异常')
    })
  })
}
