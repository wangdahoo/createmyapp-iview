import qs from 'qs'
import 'whatwg-fetch'
import {Message} from 'iview'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const http = (url, options) => {
  return new Promise((resolve, reject) => {
    let opt = options || {}

    if (opt.method && opt.method.toLowerCase() === 'post' && opt.body) {
      opt.body = qs.stringify(opt.body)
      opt.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    }

    if (opt.method && opt.method.toLowerCase() === 'get') {
      opt.headers = {'Content-Type': 'application/json'}
    }

    fetch(url, {credentials: 'same-origin', ...opt})
      .then(checkStatus)
      .then(response => {
        return response.json()
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        const res = err.response
        const statusCode = res.status

        if (statusCode === 500) {
          Message.error({content: '服务器内部错误'})
        } else if (statusCode === 403) { // 无权限
          Message.error({content: '请先登录'})
        } else if (statusCode === 400) {
          try {
            res.json().then(({err_msg}) => {
              if (typeof err_msg === 'string') Message.error({content: err_msg || '参数错误'})
            })
          } catch (e) {

          }
        }

        reject(res)
      })
  })
}

export default http
