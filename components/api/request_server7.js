import axios from 'axios'
import { createToken, tokenErrorHandle } from "./util/util";

const service = axios.create({
  // baseURL: "http://192.168.0.21:3000"
  baseURL: process.env.NEXT_PUBLIC_URL
})

service.interceptors.request.use(createToken, tokenErrorHandle)

export default service
