import * as React from "react"
import router from "next/router"
import Image from "next/image"
import Link from "@/Link"
import TextField from "@components/common/TextField"
import TextFieldPassword from "@components/common/TextFieldPassword"
import Button from "@components/common/Button"
import { PasswordDataValue } from "../hooks/passowrdHook"
import { signin } from "@components/api/modules/auth"
import { Box } from "@mui/material"
import { GoogleLoginButton } from "@components/common/LoginGoogle"
import { GoogleOAuthProvider } from "@react-oauth/google"
import {
  SigninMain,
  SigninLogo,
  SigninBox,
  SigninTextBox,
  SigninText,
  SignupLink,
  SigninForm,
  SigninContentBox,
  SigninContent,
  SigninContentTypography,
  LineOr,
  LineOrBeforeAfter,
  LineOrText,
  AuthBoxOptions,
} from "./Signin.styles"

export default function Signin() {
  const [emailValues, setEmailValues] = React.useState("")
  const { passwordValue } = PasswordDataValue()
  const [loginHelperText, setLoginHelperText] = React.useState("")
  const clientId = `${process.env.NEXT_PUBLIC_GOOGLE_CLIENTID}`

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      fetchSignin()
    }
  }

  const emailChange = (event: { target: { value: string } }) => {
    const { value } = event.target
    setEmailValues(value)
  }

  function onClickSigninBtn() {
    fetchSignin()
  }

  async function fetchSignin() {
    let requestBody = {
      userId: emailValues,
      password: passwordValue,
      userType: "espreso",
    }
    await signin(requestBody)
      .then((data) => {
        console.log("signin-->", data.data)
        sessionStorage.setItem("accessToken", data.data.tokens.access_token)
        sessionStorage.setItem("refreshToken", data.data.tokens.refresh_token)
        sessionStorage.setItem("expiredTime", data.data.exp.exp)
        sessionStorage.setItem("userId", emailValues)
        router.push("/workspace")
      })
      .catch((err) => {
        console.log("signin err-->", err.response)
        setLoginHelperText(
          "????????? ?????? ??????????????? ???????????? ????????????. ????????? ????????? ?????? ????????? ?????????."
        )
      })
  }

  React.useEffect(() => {
    const user = sessionStorage.getItem("userId")
    if (user) {
      router.replace("/workspace")
    }
  }, [])

  return (
    <SigninMain>
      <SigninLogo>
        <Link href="/">
          {/* <Image src="/favicon.png" alt="Image" width={51} height={51} /> */}
          <Image
            src="/AiAM_logoTypo.webp"
            alt="Image"
            width={130}
            height={51}
          />
        </Link>
      </SigninLogo>
      <SigninBox>
        <SigninTextBox>
          <SigninText>????????? ?????????</SigninText>
          <SignupLink>
            ????????? ????????????????
            <Link href="/auth/signup" sx={{ color: "#C32632" }}>
              ????????????
            </Link>
          </SignupLink>
        </SigninTextBox>
        <SigninForm>
          <SigninContentBox>
            <SigninContent>
              <SigninContentTypography>?????????</SigninContentTypography>
            </SigninContent>
          </SigninContentBox>
          <TextField
            autoFocus={true}
            width="100%"
            height="40px"
            padding="0px 16px"
            onChange={emailChange}
          />
          <SigninContentBox>
            <SigninContent>
              <SigninContentTypography>????????????</SigninContentTypography>
            </SigninContent>
          </SigninContentBox>
          <TextFieldPassword
            width="100%"
            height="40px"
            padding="0px 16px"
            onKeyPress={handleKeyPress}
          />
          <Box sx={{ color: "red" }}>{loginHelperText}</Box>
          <SigninContentBox>
            <Button
              label="?????????"
              borderRadius="4px"
              borderColor="#E0E0E0"
              size="large"
              height="46px"
              onClick={onClickSigninBtn}
            />
          </SigninContentBox>
          <LineOr>
            <LineOrBeforeAfter />
            <LineOrText>??????</LineOrText>
            <LineOrBeforeAfter />
          </LineOr>
          <SigninContentBox>
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLoginButton />
            </GoogleOAuthProvider>
          </SigninContentBox>
        </SigninForm>
        <AuthBoxOptions>
          <Link href="/auth/findpassword" sx={{ color: "#C32632" }}>
            ???????????? ??????
          </Link>
        </AuthBoxOptions>
      </SigninBox>
    </SigninMain>
  )
}
