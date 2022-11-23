import * as React from "react"
import Image from "next/image"
import Link from "@/Link"
import { TextField as MuiTextField } from "@mui/material"
import Button from "@components/common/Button"
import {
  sendAuthCode,
  checkEmail,
  checkAuthCode,
} from "@components/api/modules/auth"
import {
  SignupBox,
  SignupLogoBox,
  SignupLogo,
  SignupMain,
  SignupForm,
  SignupCreateBox,
  SignupCreate,
  SignupAlready,
  SignupTextBox,
  SignupTypography,
  SignupContentBox,
  SignupContent,
  SignupContextLogo,
  SignupContentText,
} from "../signup/Signup.styles"

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>
  setEmailValues: React.Dispatch<React.SetStateAction<string>>
  emailValues: string
}

export default function Step1(props: Props) {
  const { setStep, setEmailValues, emailValues } = props

  const [emailCheck, setEmailCheck] = React.useState(false)
  const [emailHelperText, setEmailHelperText] = React.useState("")

  // 인증 API 검증 value
  const [authCodeId, setAuthCodeId] = React.useState("")
  const [authCodeValues, setAuthCodeValues] = React.useState("")
  const [authCodeCheck, setAuthCodeCheck] = React.useState(false)
  const [authCodeHelperText, setAuthCodeHelperText] = React.useState("")

  function onCodeBlur() {
    if (authCodeId !== "") fetchCheckCode()
  }

  async function fetchCheckCode() {
    let requestBody = {
      auth_id: authCodeId,
      auth_str: authCodeValues,
    }
    await checkAuthCode(requestBody).then((data) => {
      setAuthCodeCheck(data.data)
      setAuthCodeHelperText(
        data.data && authCodeValues !== ""
          ? "인증이 완료되었습니다."
          : "인증코드를 확인해주세요."
      )
    })
  }

  function onEmailBlur() {
    if (emailValues !== "") fetchCheckEmail()
  }

  async function fetchCheckEmail() {
    let requestBody = {
      email: emailValues,
    }
    await checkEmail(requestBody).then((data) => {
      setEmailCheck(!data.data)
      setEmailHelperText(
        data.data && emailValues !== "" ? "존재하지 않는 이메일 입니다." : ""
      )
    })
  }

  async function fetchSendAuthCode() {
    let requestBody = {
      email: emailValues,
    }
    await sendAuthCode(requestBody).then((data: { data: any }) => {
      setAuthCodeId(String(data.data))
      setAuthCodeHelperText("인증코드가 발송 되었습니다.")
    })
  }

  function onClickSendBtn() {
    if (emailCheck) {
      fetchSendAuthCode()
    } else {
      alert(emailHelperText)
    }
  }

  const codeChange = (event: { target: { value: string } }) => {
    const { value } = event.target

    setAuthCodeValues(value)
  }

  const emailChange = (event: { target: { value: string } }) => {
    const { value } = event.target
    setEmailCheck(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value))
    setEmailHelperText(
      !emailCheck && value !== "" ? "형식에 맞지 않는 메일주소 입니다." : ""
    )
    setEmailValues(value)
  }

  function goToNextStep() {
    setStep(2)
  }

  return (
    <>
      <SignupLogoBox>
        <SignupLogo>
          <Image src="/favicon.png" alt="Image" width={51} height={51} />
          <Image
            src="/espresomedia_name.png"
            alt="Image"
            width={130}
            height={51}
          />
        </SignupLogo>
      </SignupLogoBox>
      <SignupBox>
        <SignupMain>
          <SignupCreateBox>
            <SignupCreate>Step1</SignupCreate>
            <SignupAlready>
              이메일을 인증해주세요.
              <Link href="/auth/signin" sx={{ color: "#C32632" }}>
                로그인
              </Link>
            </SignupAlready>
          </SignupCreateBox>
          <SignupForm>
            <SignupTextBox>
              <SignupTypography>이메일</SignupTypography>
              <MuiTextField
                error={!emailCheck && emailValues !== ""}
                helperText={emailHelperText}
                onChange={emailChange}
                onBlur={onEmailBlur}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    "&.Mui-focused fieldset": { color: "#C32632", border: 2 },
                  },
                }}
              />
            </SignupTextBox>
            <SignupTextBox>
              <SignupTypography>인증코드</SignupTypography>
              <MuiTextField
                error={!authCodeCheck && authCodeValues !== ""}
                helperText={authCodeHelperText}
                onChange={codeChange}
                onBlur={onCodeBlur}
                sx={{
                  width: "195px",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    "&.Mui-focused fieldset": { color: "#C32632", border: 2 },
                  },
                }}
              />
              <Button
                label="코드전송"
                borderRadius="4px"
                px="0"
                size="large"
                height="40px"
                width="80px"
                margin="0px 0px 0px 5px"
                onClick={onClickSendBtn}
                disabled={emailCheck ? false : true}
              />
            </SignupTextBox>
            <Button
              label="다음"
              borderRadius="4px"
              size="large"
              height="46px"
              onClick={goToNextStep}
              disabled={emailCheck && authCodeCheck ? false : true}
            />
          </SignupForm>
        </SignupMain>
        <SignupContentBox>
          <SignupContent>
            <SignupContextLogo>
              <Image
                src="/espreso_logo.png"
                alt="logo"
                width={350}
                height={89}
              />
            </SignupContextLogo>
            <SignupContentText>
              인공지능을 이용해 고해상도로 변환하세요.
            </SignupContentText>
          </SignupContent>
        </SignupContentBox>
      </SignupBox>
    </>
  )
}
