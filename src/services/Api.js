import Axios from 'axios'

const BASE_URL = 'http://192.168.10.10/api'
const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const resolve = (response) => new Promise((resolve) => resolve(response.data))
const reject = (error) => new Promise((resolve, reject) => reject(error.response.data))
const getCurrentConfig = () => {
    const auth = localStorage.getItem('auth')
    const token = auth ? JSON.parse(auth).token : null
    let headers = DEFAULT_HEADERS

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    return {
        baseURL: BASE_URL,
        headers
    }
}

export default class Api {
  static get(route) {
    return Axios({
      ...getCurrentConfig(),
      url: route,
      method: 'get'
    }).then(resolve, reject)
  }

  static post(route, params) {
    return Axios({
      ...getCurrentConfig(),
      url: route,
      method: 'post',
      data: params
    }).then(resolve, reject)
  }

  static put(route, params) {
    return Axios({
      ...getCurrentConfig(),
      url: route,
      method: 'put',
      data: params
    }).then(resolve, reject)
  }

  static patch(route, params) {
    return Axios({
      ...getCurrentConfig(),
      url: route,
      method: 'patch',
      data: params
    }).then(resolve, reject)
  }

  static delete(route, params) {
    return Axios({
      ...getCurrentConfig(),
      url: route,
      method: 'delete',
      data: params
    }).then(resolve, reject)
  }
}
