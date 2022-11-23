import { Box, Button as MuiButton } from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const SigninMain = styled(Box, { name: "SigninMain" })(
  sx({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "0px 24px",
    width: "100%",
    height: "100vh",
  })
)

const SigninLogo = styled(Box, { name: "SigninLogo" })(
  sx({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: {
      xs: "center",
      sm: "normal",
      md: "normal",
      lg: "normal",
      xl: "normal",
    },
    width: "100%",
    height: "76px",
    minHeight: "76px",
    mb: "32px",
  })
)

const SigninBox = styled(Box, { name: "SigninBox" })(
  sx({
    display: "flex",
    flex: "1 1 0%",
    flexDirection: "column",
    justifyContent: "stretch",
    width: "100%",
    maxWidth: "488px",
  })
)

const SigninTextBox = styled(Box, { name: "SigninTextBox" })(
  sx({
    pb: "32px",
    textAlign: "center",
  })
)

const SigninText = styled(Box, { name: "SigninText" })(
  sx({
    margin: "0px -20px",
    padding: "0px",
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: 1.27,
    color: "black",
  })
)

const SignupLink = styled(Box, { name: "SignupLink" })(
  sx({
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    mt: "16px",
    color: "#4E5A68",
  })
)

const SigninForm = styled(Box, { name: "SigninForm" })(
  sx({
    borderRadius: "4px",
    border: " 1px solid",
    borderColor: "#E0E0E0",
    maxWidth: "488px",
    padding: "24px",
  })
)

const SigninContentBox = styled(Box, { name: "SigninContentBox" })(
  sx({
    mt: "16px",
  })
)

const SigninContent = styled(Box, { name: "SigninContent" })(
  sx({
    display: "flex",
    alignItems: "center",
    position: "relative",
  })
)

const SigninContentTypography = styled(Box, {
  name: "SigninContentTypography",
})(
  sx({
    display: "flex",
    alignItems: "center",
    height: "12px",
    mb: "6px",
    fontSize: "12px",
    fontWeight: 500,
  })
)

const GoogleButton = styled(MuiButton, {
  name: "GoogleButton",
})(
  sx({
    display: "flex",
    justifyContent: "flex-start",
    border: 1,
    borderRadius: "4px",
    borderColor: "#E0E0E0",
    size: "large",
    width: "100%",
    height: "46px",
    backgroundColor: "white",
    color: "#4E5A68",
    "&:hover": {
      width: "100%",
      height: "46px",
      backgroundColor: "white",
      border: 1,
      borderColor: "#E0E0E0",
    },
  })
)

const LineOr = styled(Box, {
  name: "LineOr",
})(
  sx({
    position: "relative",
    display: "block",
    width: "100%",
    padding: "15px 0px 0px 0px",
  })
)

const LineOrBeforeAfter = styled(Box, {
  name: "LineOrBeforeAfter",
})(
  sx({
    display: "inline-block",
    width: "calc(50% - 20px)",
    height: "1px",
    margin: "8px 0",
    backgroundColor: "rgba(0,0,0,0.06)",
    verticalAlign: "middle",
  })
)

const LineOrText = styled(Box, {
  name: "LineOrText",
})(
  sx({
    display: "inline-block",
    width: "40px",
    fontSize: "12px",
    lineHeight: "18px",
    textAlign: "center",
    color: "rgba(0,0,0,0.3)",
  })
)

const GoogleButtonTypography = styled(Box, {
  name: "GoogleButtonTypography",
})(
  sx({
    display: "flex",
    flex: "1 1 0%",
    justifyContent: "center",
    mr: "24px",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: 1.25,
  })
)

const AuthBoxOptions = styled(Box, {
  name: "AuthBoxOptions",
})(
  sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 0",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.43,
    color: "#C32632",
  })
)

export {
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
  GoogleButton,
  LineOr,
  LineOrBeforeAfter,
  LineOrText,
  GoogleButtonTypography,
  AuthBoxOptions,
}
