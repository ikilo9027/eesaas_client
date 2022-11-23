import axios, { AxiosRequestConfig } from "axios"
import _ from "lodash"
// import { server } from "config/config.json";
import moment from "moment"
import { useRouter } from "next/router"

const createToken = async (config) => {
  let notRequired = [
    "/newuser/signup",
    "/newuser/signin",
    "/newuser/sendemail",
    "/newuser/ckeckemail",
    "/newuser/auth",
    "/newuser/resetpw",
  ]

  if (notRequired.indexOf(config.url) === -1) {
    const userId = sessionStorage.getItem("userId")
    const accessToken = sessionStorage.getItem("accessToken")
    const refreshToken = sessionStorage.getItem("refreshToken")
    let date = new Date(Number(sessionStorage.getItem("expiredTime")))
    // date.getSeconds() - 10
    const now = moment()
    if (now.toDate() > date && refreshToken) {
      // const body = {
      //   refreshtoken: refreshToken,
      //   userId: userId
      // };

      // // 토큰 갱신 서버통신
      // const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/newuser/access`, body);

      // accessToken = data.accestoken;
      // sessionStorage.setItem("accessToken", data.accessToken);
      // sessionStorage.setItem("expiredTime", data.exp);
      alert("토큰이 만료 되었습니다")
      sessionStorage.removeItem("accessToken")
      sessionStorage.removeItem("refreshToken")
      sessionStorage.removeItem("expiredTime")
      sessionStorage.removeItem("userId")
      window.location.href = `/auth/signin`
    }

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    } else {
      config.headers["Authorization"] = `Bearer None`
    }
  }

  return config
}

const tokenErrorHandle = (err) => {
  // Cookie.remove("refreshToken");
}

export { createToken, tokenErrorHandle }
