import axios from 'axios'

const service = axios.create({
  baseURL: "https://www.googleapis.com"
})

service.interceptors.request.use((config) => {
  return config
}, async (err) => {
  return Promise.reject(err)
})

export default service