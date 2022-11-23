import * as React from "react"
import router from "next/router"
import Image from "next/image"
import Link from "@/Link"
import { TextField as MuiTextField } from "@mui/material"
import TextFieldPassword from "@components/common/TextFieldPassword"
import { Box, Checkbox, Modal, Typography, InputAdornment } from "@mui/material"
import IconButton from "@components/common/IconButton"
import Button from "@components/common/Button"
import Icon from "@components/common/Icon"
import {
  signup,
  sendAuthCode,
  checkEmail,
  checkAuthCode,
} from "@components/api/modules/auth"
import { PasswordCheckValue, PasswordDataValue } from "../hooks/passowrdHook"
import { LineOr, LineOrBeforeAfter, LineOrText } from "../signin/Signin.styles"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleSignUpButton } from "@components/common/LoginGoogle"
import {
  SignupBox,
  SignupLogoBox,
  SignupLogo,
  SignupMain,
  SignupContentBox,
  SignupContent,
  SignupContentText,
  SignupForm,
  SignupCreateBox,
  SignupCreate,
  SignupAlready,
  SignupTextBox,
  SignupContextLogo,
  GoogleButton,
  GoogleButtonTypography,
  SignupTypography,
  PolicyTypography,
} from "./Signup.styles"

const TosModalStyle = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  maxWidth: "600px",
  p: "40px 44px",
}

interface TosModalProps {
  open: boolean
  onClose: () => void
}

const TosModal = (props: TosModalProps) => {
  const { open, onClose } = props
  return (
    <Modal open={open}>
      <Box sx={TosModalStyle}>
        <Icon
          icon="ErrorOutline"
          iconColor="#AEB7C2"
          width="60px"
          height="60px"
        />
        <Box sx={{ width: "240px", textAlign: "center" }}>
          <Typography variant="h6" fontWeight={700} sx={{ my: 2 }}>
            이용 약관에 동의하여 주세요.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ mr: "2px", width: "100%", textAlign: "center" }}>
            <Button
              label="확인"
              onClick={onClose}
              width="140px"
              color="dark"
              borderColor="black"
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default function Authenfication() {
  const [authCodeId, setAuthCodeId] = React.useState("")

  const [emailValues, setEmailValues] = React.useState("")
  const [emailCheck, setEmailCheck] = React.useState(false)
  const [emailHelperText, setEmailHelperText] = React.useState("")

  // 인증 API 검증결과 set
  const [isAuthCode, setIsAuthCode] = React.useState(false)
  // 인증 API 검증 value
  const [authCodeValues, setAuthCodeValues] = React.useState("")
  const [authCodeCheck, setAuthCodeCheck] = React.useState(false)
  const [authCodeHelperText, setAuthCodeHelperText] = React.useState("")
  const [signupHelperText, setSignupHelperText] = React.useState("")

  const [isRePassword, setIsRePassword] = React.useState(false)
  const [rePasswordValues, setRePasswordValues] = React.useState("")
  const [rePasswordCheck, setRePasswordCheck] = React.useState(false)
  const [rePasswordHelperText, setRePasswordHelperText] = React.useState("")

  const { passwordValue } = PasswordDataValue()
  const { passwordCheckValue } = PasswordCheckValue()
  const [check, setCheck] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const clientId = `${process.env.NEXT_PUBLIC_GOOGLE_CLIENTID}`

  const onClose = () => {
    setOpen(false)
  }

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
      setEmailCheck(data.data)
      setEmailHelperText(
        data.data && emailValues !== "" ? "" : "이미 등록된 이메일 입니다."
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
      setAuthCodeHelperText(emailHelperText)
    }
  }

  const handleClickShowPassword = () => {
    setIsRePassword(!isRePassword)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const rePasswordChange = (event: { target: { value: string } }) => {
    const { value } = event.target
    setRePasswordValues(value)
  }

  React.useEffect(() => {
    setRePasswordCheck(
      rePasswordValues === passwordValue && rePasswordValues !== ""
    )
    setRePasswordHelperText(
      rePasswordCheck && rePasswordValues !== ""
        ? "비밀번호가 일치하지 않습니다."
        : ""
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rePasswordValues, passwordValue])

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

  function onClickSignupBtn() {
    if (check === false) {
      setOpen(true)
    }
    fetchSignup()
  }

  async function fetchSignup() {
    let requestBody = {
      userId: emailValues,
      password: passwordValue,
      userType: "espreso",
    }
    await signup(requestBody)
      .then((data) => {
        router.push("/auth/signupsuccess")
      })
      .catch((err) => {
        setSignupHelperText("회원가입에 실패하였습니다. 다시 시도해주세요")
      })
  }

  return (
    <>
      <SignupLogoBox>
        <SignupLogo>
          <Link href="/">
            <Image src="/favicon.png" alt="Image" width={51} height={51} />
            <Image
              src="/espresomedia_name.png"
              alt="Image"
              width={130}
              height={51}
            />
          </Link>
        </SignupLogo>
      </SignupLogoBox>
      <SignupBox>
        <SignupMain>
          <SignupCreateBox>
            <SignupCreate>계정을 생성하세요</SignupCreate>
            <SignupAlready>
              이미 계정이 있으신가요?
              <Link href="/auth/signin" sx={{ color: "#C32632" }}>
                로그인
              </Link>
            </SignupAlready>
          </SignupCreateBox>
          <SignupForm>
            <SignupTextBox>
              <SignupTypography>이메일</SignupTypography>
              <MuiTextField
                autoFocus={true}
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
              {!isAuthCode ? (
                <>
                  <MuiTextField
                    error={!authCodeCheck && authCodeValues !== ""}
                    helperText={authCodeHelperText}
                    onChange={codeChange}
                    onBlur={onCodeBlur}
                    sx={{
                      width: "195px",
                      "& .MuiOutlinedInput-root": {
                        height: "40px",
                        "&.Mui-focused fieldset": {
                          color: "#C32632",
                          border: 2,
                        },
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
                  // disabled={
                  //   check && emailCheck && passwordCheckValue ? false : true
                  // }
                  />
                </>
              ) : (
                "인증완료 되었습니다."
              )}
            </SignupTextBox>
            <SignupTextBox>
              <SignupTypography>비밀번호</SignupTypography>
              <TextFieldPassword height="40px" />
            </SignupTextBox>
            <SignupTextBox>
              <SignupTypography>비밀번호 확인</SignupTypography>
              <MuiTextField
                type={isRePassword ? "text" : "password"}
                // value={values.password}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    "&.Mui-focused fieldset": {
                      color: "#C32632",
                      border: 2,
                    },
                  },
                }}
                error={!rePasswordCheck && rePasswordValues !== ""}
                helperText={rePasswordHelperText}
                onChange={rePasswordChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        icon={isRePassword ? "VisibilityOff" : "Visibility"}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      ></IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </SignupTextBox>
            <SignupTextBox>
              <PolicyTypography>
                <Checkbox
                  checked={check}
                  onChange={() => setCheck(!check)}
                  sx={{
                    width: "18px",
                    height: "18px",
                    mr: "0.75rem",
                    "&.Mui-checked": {
                      color: "#C32632",
                    },
                  }}
                />
                이용약관에 동의합니다.
                <Link
                  href="/auth/privacy"
                  sx={{ ml: "0.3rem", color: "#C32632" }}
                >
                  개인정보처리방침
                </Link>
                <TosModal open={open} onClose={onClose} />
              </PolicyTypography>
            </SignupTextBox>
            <Box sx={{ color: "red" }}>{signupHelperText}</Box>
            <Button
              label="이메일로 회원가입"
              borderRadius="4px"
              size="large"
              height="46px"
              onClick={onClickSignupBtn}
              disabled={
                check &&
                  emailCheck &&
                  passwordCheckValue &&
                  rePasswordCheck &&
                  authCodeCheck
                  ? false
                  : true
              }
            />
            <LineOr>
              <LineOrBeforeAfter />
              <LineOrText>또는</LineOrText>
              <LineOrBeforeAfter />
            </LineOr>
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleSignUpButton />
            </GoogleOAuthProvider>
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
              인공지능을 이용해 고해상도로 변환하세요
            </SignupContentText>
          </SignupContent>
        </SignupContentBox>
      </SignupBox>
    </>
  )
}
