import * as React from "react"
import router from "next/router"
import Image from "next/image"
import { TextField as MuiTextField } from "@mui/material"
import TextFieldPassword from "@components/common/TextFieldPassword"
import { InputAdornment } from "@mui/material"
import IconButton from "@components/common/IconButton"
import Button from "@components/common/Button"
import { resetPassword } from "@components/api/modules/auth"
import { PasswordCheckValue, PasswordDataValue } from "../hooks/passowrdHook"
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
  emailValues: string
}

export default function Step2(props: Props) {
  const { emailValues } = props

  const [isRePassword, setIsRePassword] = React.useState(false)
  const [rePasswordValues, setRePasswordValues] = React.useState("")
  const [rePasswordCheck, setRePasswordCheck] = React.useState(false)
  const [rePasswordHelperText, setRePasswordHelperText] = React.useState("")

  const { passwordValue } = PasswordDataValue()
  const { passwordCheckValue } = PasswordCheckValue()

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

  function onClickSignupBtn() {
    fetchNewPassword()
  }

  async function fetchNewPassword() {
    let requestBody = {
      password: passwordValue,
      userId: emailValues,
    }

    await resetPassword(requestBody).then(() => {
      alert("비밀번호가 변경되었습니다.")
      router.push("/auth/signin")
    })
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
            <SignupCreate>Step2</SignupCreate>
            <SignupAlready>
              {emailValues}님 <br />새 비밀번호를 입력해 주세요.
            </SignupAlready>
          </SignupCreateBox>
          <SignupForm>
            <SignupTextBox>
              <SignupTypography>새 비밀번호</SignupTypography>
              <TextFieldPassword height="40px" />
            </SignupTextBox>
            <SignupTextBox>
              <SignupTypography>새 비밀번호 확인</SignupTypography>
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
            <Button
              label="확인"
              borderRadius="4px"
              size="large"
              height="46px"
              onClick={onClickSignupBtn}
              disabled={passwordCheckValue && rePasswordCheck ? false : true}
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
              인공지능을 이용해 고해상도로 변환하세요
            </SignupContentText>
          </SignupContent>
        </SignupContentBox>
      </SignupBox>
    </>
  )
}
