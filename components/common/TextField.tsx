import * as React from "react"
import { TextField as MuiTextField } from "@mui/material"

interface Props {
  type: "text" | "number"
  autoFocus: boolean
  disabled: boolean
  error: boolean
  fullWidth: boolean
  helperText: string
  label?: string
  multiline: boolean
  placeholder?: string
  required: boolean
  variant: "filled" | "outlined" | "standard"
  width: number | string
  height: number | string
  padding?: number | string
  onChange?: (event: { target: { value: string } }) => void
  onKeyPress?: (e: { key: string }) => void
}

export default function TextField(props: Props): JSX.Element {
  const { type, width, height, ...other } = props

  // const style: React.CSSProperties = { width, height }

  return (
    <MuiTextField
      // style={style}
      type={type}
      {...other}
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
          "&.Mui-focused": { borderColor: "#C32632" },
          "&.Mui-focused fieldset": {
            border: 2,
            color: "#C32632",
          },
        },
        "& .MuiFormHelperText-root": {
          color: "red",
        },
      }}
    />
  )
}

TextField.defaultProps = {
  type: "text",
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  helperText: "",
  multiline: false,
  required: false,
  variant: "outlined" as "outlined",
  width: 280,
  height: 56,
}
