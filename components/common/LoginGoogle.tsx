import {
  GoogleButton,
  GoogleButtonTypography,
} from "@components/auth/signin/Signin.styles"
import { useGoogleLogin } from "@react-oauth/google"
import { useRouter } from "next/router"
import { signin, google_signin } from "../api/modules/auth"

const GoogleLoginButton = () => {
  const router = useRouter()
  const login = useGoogleLogin({
    onSuccess: (async (tokenResponse) => {
      await google_signin(tokenResponse.access_token).then((data) => {
        fetchSignin(data)
      })
    }),
    onError: () => console.log("Login Failed"),
    flow: 'implicit',
  })

  async function fetchSignin(userInfo: any) {
    let requestBody = {
      userId: userInfo.data.email,
      userType: 'google'
    }
    await signin(requestBody).then((data) => {
      console.log("signin-->", data.data)
      sessionStorage.setItem("accessToken", data.data.tokens.access_token)
      sessionStorage.setItem("refreshToken", data.data.tokens.refresh_token)
      sessionStorage.setItem("expiredTime", data.data.exp.exp)
      sessionStorage.setItem("userId", userInfo.data.email)
      router.push("/workspace")
    }).catch((err) => {
      console.log("signin err-->", err.response)
    })
  }

  return (
    <GoogleButton onClick={() => login()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="feather__icon FeatherIcon-sc-1q2yt3q-0 hvjkP"
      >
        <path
          fill="#4285F4"
          d="M23.841 12.267c0-.987-.08-1.707-.255-2.454H12.232v4.454h6.665c-.134 1.106-.86 2.773-2.472 3.893l-.023.149 3.59 2.76.249.024c2.284-2.093 3.6-5.173 3.6-8.826z"
        ></path>
        <path
          fill="#34A853"
          d="M12.233 24c3.265 0 6.006-1.067 8.008-2.907l-3.816-2.933c-1.021.707-2.392 1.2-4.192 1.2-3.198 0-5.912-2.093-6.88-4.987l-.142.012-3.733 2.867-.048.135A12.094 12.094 0 0 0 12.233 24z"
        ></path>
        <path
          fill="#FBBC05"
          d="M5.353 14.373A7.336 7.336 0 0 1 4.95 12c0-.827.148-1.627.39-2.373l-.007-.16-3.78-2.912-.123.058A11.936 11.936 0 0 0 .14 12c0 1.933.47 3.76 1.29 5.387l3.923-3.014z"
        ></path>
        <path
          fill="#EB4335"
          d="M12.233 4.64c2.27 0 3.802.973 4.675 1.787l3.413-3.307C18.225 1.187 15.498 0 12.233 0 7.503 0 3.418 2.693 1.43 6.613l3.91 3.014c.98-2.894 3.695-4.987 6.893-4.987z"
        ></path>
      </svg>{" "}
      <GoogleButtonTypography>구글로 회원가입</GoogleButtonTypography>
    </GoogleButton>
  )
}

const GoogleSignUpButton = () => {
  const router = useRouter()
  const login = useGoogleLogin({
    onSuccess: (async (tokenResponse) => {
      await google_signin(tokenResponse.access_token).then((data) => {
        fetchSignin(data)
      })
    }),
    onError: () => console.log("Login Failed"),
    flow: 'implicit',
  })

  async function fetchSignin(userInfo: any) {
    let requestBody = {
      userId: userInfo.data.email,
      userType: 'google'
    }
    await signin(requestBody).then((data) => {
      console.log("signin-->", data.data)
      sessionStorage.setItem("accessToken", data.data.tokens.access_token)
      sessionStorage.setItem("refreshToken", data.data.tokens.refresh_token)
      sessionStorage.setItem("expiredTime", data.data.exp.exp)
      sessionStorage.setItem("userId", userInfo.data.email)
      router.push("/workspace")
    }).catch((err) => {
      console.log("signin err-->", err.response)
    })
  }

  return (
    <GoogleButton onClick={() => login()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="feather__icon FeatherIcon-sc-1q2yt3q-0 hvjkP"
      >
        <path
          fill="#4285F4"
          d="M23.841 12.267c0-.987-.08-1.707-.255-2.454H12.232v4.454h6.665c-.134 1.106-.86 2.773-2.472 3.893l-.023.149 3.59 2.76.249.024c2.284-2.093 3.6-5.173 3.6-8.826z"
        ></path>
        <path
          fill="#34A853"
          d="M12.233 24c3.265 0 6.006-1.067 8.008-2.907l-3.816-2.933c-1.021.707-2.392 1.2-4.192 1.2-3.198 0-5.912-2.093-6.88-4.987l-.142.012-3.733 2.867-.048.135A12.094 12.094 0 0 0 12.233 24z"
        ></path>
        <path
          fill="#FBBC05"
          d="M5.353 14.373A7.336 7.336 0 0 1 4.95 12c0-.827.148-1.627.39-2.373l-.007-.16-3.78-2.912-.123.058A11.936 11.936 0 0 0 .14 12c0 1.933.47 3.76 1.29 5.387l3.923-3.014z"
        ></path>
        <path
          fill="#EB4335"
          d="M12.233 4.64c2.27 0 3.802.973 4.675 1.787l3.413-3.307C18.225 1.187 15.498 0 12.233 0 7.503 0 3.418 2.693 1.43 6.613l3.91 3.014c.98-2.894 3.695-4.987 6.893-4.987z"
        ></path>
      </svg>{" "}
      <GoogleButtonTypography>구글로 회원가입</GoogleButtonTypography>
    </GoogleButton>
  )
}

export { GoogleLoginButton, GoogleSignUpButton }
