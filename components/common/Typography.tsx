import * as React from "react"
import { Typography as MaterialTypography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

interface Props {
  align: "center" | "inherit" | "justify" | "left" | "right"
  color:
    | "primary"
    | "primary.light"
    | "primary.dark"
    | "secondary"
    | "secondary.light"
    | "secondary.dark"
  weight?: "light" | "regular" | "medium" | "bold"
  label: string
  variant:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#333d4b",
      dark: "#0d0d0d",
    },
    secondary: {
      light: "#8b95a1",
      main: "#4e5968",
      dark: "#b0b8c1",
    },
  },
})

export default function Typography(props: Props): JSX.Element {
  const { weight, label, color, ...other } = props
  return (
    <ThemeProvider theme={theme}>
      <MaterialTypography color={color} fontWeight={weight} {...other}>
        {label}
      </MaterialTypography>
    </ThemeProvider>
  )
}

Typography.defaultProps = {
  color: "textPrimary",
  align: "inherit" as "inherit",
  label: "Typography",
}
