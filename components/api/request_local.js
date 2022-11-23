import axios from 'axios'

const service = axios.create({
  // baseURL: "http://localhost:3005"
  baseURL: "http://192.168.0.21:3000"
})

service.interceptors.request.use((config) => {
  // const accessToken = sessionStorage.getItem('accessToken')
  // if (accessToken) {
  //   config.headers['Authorization'] = `Bearer ${accessToken}`
  // } else {
  //   config.headers['Authorization'] = 'None'
  // }
  return config
}, async (err) => {
  return Promise.reject(err)
})

export default service