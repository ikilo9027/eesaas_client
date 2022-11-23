import * as React from "react"
import { TextField as MuiTextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import Icon from "./Icon"

interface Props {
  startIcon: string
  endIcon: string
  autoFocus: boolean
  disabled: boolean
  error: boolean
  fullWidth: boolean
  helperText: string
  label: string
  multiline: boolean
  placeholder?: string
  required: boolean
  variant: "filled" | "outlined" | "standard"
  width: number | string
  height: number
}

export default function TextFieldIcon(props: Props): JSX.Element {
  const { startIcon, endIcon, width, height, ...other } = props

  const style: React.CSSProperties = { width, height }

  const StartIcon = startIcon === "" ? undefined : <Icon icon={startIcon} />

  const EndIcon = endIcon === "" ? undefined : <Icon icon={endIcon} />

  return (
    <MuiTextField
      style={style}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{StartIcon}</InputAdornment>
        ),
        endAdornment: <InputAdornment position="end">{EndIcon}</InputAdornment>,
      }}
      {...other}
    />
  )
}

TextFieldIcon.defaultProps = {
  startIcon: undefined,
  endIcon: undefined,
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: true,
  helperText: "",
  label: "IconField",
  multiline: false,
  required: false,
  variant: "outlined" as "outlined",
  width: 280,
  height: 56,
}
