import { Button as MuiButton } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { border } from "@mui/system"
import Icon from "./Icon"

declare module "@mui/material/styles" {
  interface PaletteOptions {
    dark?: PaletteOptions["primary"]
  }
  interface PaletteOptions {
    white?: PaletteOptions["primary"]
  }
}

interface Props {
  color: any
  backgroundColor: string
  iconColor?: string
  disabled: boolean
  disableElevation: boolean
  disableRipple?: boolean
  endIcon: string
  fullWidth: boolean
  href?: string
  startIcon: string
  label: string
  width: number | string
  hoverWidth?: number | string
  height: number | string
  hoverHeight?: number | string
  size?: "small" | "medium" | "large"
  variant?: "contained" | "outlined" | "text"
  border?: number | string
  borderRadius?: number | string
  borderColor?: string
  boxShadow?: string
  px?: number | string
  py?: number | string
  margin?: number | string
  fontSize?: string
  onClick?: () => void
}

const theme = createTheme({
  palette: {
    primary: {
      // light: "#B73A3C",
      main: "#C32632",
      // dark: "#BE2E3C",
      // contrastText: "#ffffff",
    },
    secondary: {
      // light: "ffffff",
      main: "#B73A3C",
      // dark: "#ffffff",
      // contrastText: "#ffffff",
    },
    dark: {
      main: "#0D0D0D",
      contrastText: "#ffffff",
    },
    white: {
      main: "#ffffff",
      contrastText: "#0D0D0D",
    },
  },
})

export default function Button(props: Props): JSX.Element {
  const {
    backgroundColor,
    endIcon,
    width,
    hoverWidth,
    height,
    hoverHeight,
    label,
    startIcon,
    variant,
    iconColor,
    border,
    borderRadius,
    borderColor,
    boxShadow,
    px,
    py,
    margin,
    fontSize,
    ...other
  } = props

  const StartIcon =
    startIcon === "" ? undefined : (
      <Icon icon={startIcon} iconColor={iconColor} />
    )
  const EndIcon =
    endIcon === "" ? undefined : <Icon icon={endIcon} iconColor={iconColor} />

  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        variant={variant}
        startIcon={StartIcon}
        endIcon={EndIcon}
        {...other}
        sx={{
          fontSize: fontSize,
          m: margin,
          px: px,
          py: py,
          boxShadow: boxShadow,
          width: width,
          height: height,
          fontWeight: "bold",
          backgroundColor: backgroundColor,
          border: border,
          borderRadius: borderRadius,
          borderColor: borderColor,
          "&:hover": {
            width: hoverWidth,
            height: hoverHeight,
            backgroundColor: backgroundColor,
            border: 1,
            borderColor: borderColor,
          },
          "&:disabled": {
            backgroundColor: "#F7F7F7",
            color: "#C4C4C4",
          },
        }}
      >
        {label}
      </MuiButton>
    </ThemeProvider>
  )
}

Button.defaultProps = {
  color: "primary",
  backgroundColor: "primary",
  disabled: false,
  disableElevation: true,
  endIcon: undefined,
  fullWidth: false,
  startIcon: undefined,
  label: "Button",
  width: "100%",
  height: 40,
  variant: "contained",
  borderRadius: 0,
  borderColor: "#C32632",
  disableRipple: true,
}
