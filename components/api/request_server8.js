import axios from 'axios'

const service = axios.create({
  baseURL: "http://52.79.80.211:2020"
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