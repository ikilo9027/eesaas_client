import * as React from "react"
import { TextField as MuiTextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "./IconButton"
import {
  PasswordDataValue,
  PasswordCheckValue,
} from "@components/auth/hooks/passowrdHook"

interface Props {
  autoFocus: boolean
  disabled: boolean
  error?: boolean
  fullWidth: boolean
  helperText?: string
  label?: string
  multiline: boolean
  placeholder?: string
  required: boolean
  variant: "filled" | "outlined" | "standard"
  width: number | string
  height: number | string
  padding?: number | string
  onKeyPress?: (e: { key: string }) => void
}

interface State {
  password: string
  showPassword: boolean
}

export default function TextFieldPassword(props: Props): JSX.Element {
  const { width, height, padding, ...other } = props
  const { setPasswordValue } = PasswordDataValue()
  const { setPasswordCheckValue } = PasswordCheckValue()
  const [passwordCheck, setPasswordCheck] = React.useState(false)
  const [passwordHelperText, setPasswordHelperText] = React.useState("")
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  })
  React.useEffect(() => {
    let passCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(
      values.password
    )
    setPasswordCheck(passCheck)
    setPasswordCheckValue(passCheck)
    setPasswordHelperText(
      (values.password !== "" && !passwordCheck) ||
        values.password.search(/\s/) !== -1
        ? "8~16자의 영문+숫자+특수문자만 가능합니다."
        : ""
    )
  }, [passwordCheck, setPasswordCheckValue, values.password])

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const emailValue = { ...values, [prop]: event.target.value }.password
      setValues({ ...values, [prop]: event.target.value })
      setPasswordValue(emailValue)
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  return (
    <MuiTextField
      // style={style}
      type={values.showPassword ? "text" : "password"}
      value={values.password}
      onChange={handleChange("password")}
      error={values.password !== "" && !passwordCheck}
      helperText={passwordHelperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              icon={values.showPassword ? "VisibilityOff" : "Visibility"}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            ></IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: width,
        "& .MuiOutlinedInput-input": {
          padding: "4px 0 5px !important",
        },
        "& .MuiOutlinedInput-root": {
          height: height,
          padding: "0px 16px",
          "&:hover fieldset": {
            borderColor: "#C4C4C4",
          },
          "&.Mui-focused fieldset": {
            color: "#C32632",
            border: 2,
          },
        },
        "& .MuiFormHelperText-root": {
          color: "red",
        },
      }}
      {...other}
    />
  )
}

TextFieldPassword.defaultProps = {
  autoFocus: false,
  disabled: false,
  fullWidth: false,
  multiline: false,
  required: false,
  variant: "outlined" as "outlined",
  width: 280,
  height: 56,
}
