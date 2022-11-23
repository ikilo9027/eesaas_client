import { Box } from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const SignupSuccessMain = styled(Box, { name: "SignupSuccessMain" })(
  sx({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "0px 24px",
    width: "100%",
    height: "100vh",
  })
)

const SignupSuccessBox = styled(Box, { name: "SignupSuccessBox" })(
  sx({
    display: "flex",
    flex: "1 1 0%",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: "488px",
  })
)

const SignupSuccessLogo = styled(Box, { name: "SignupSuccessLogo" })(
  sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "76px",
    minHeight: "76px",
    mb: "32px",
  })
)

const SignupSuccessTextBox = styled(Box, { name: "SignupSuccessTextBox" })(
  sx({
    pb: "32px",
    textAlign: "center",
  })
)

const SignupSuccessText = styled(Box, { name: "SignupSuccessText" })(
  sx({
    margin: "0px -20px",
    padding: "0px",
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: 1.27,
    color: "black",
  })
)

const SignupSuccessLink = styled(Box, { name: "SignupSuccessLink" })(
  sx({
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    mt: "16px",
    color: "#4E5A68",
  })
)

const SignupSuccessBUttonBox = styled(Box, { name: "SignupSuccessBUttonBox" })(
  sx({
    display: "flex",
    justifyContent: "center",
    mt: "16px",
  })
)

const TestBox = styled(Box, { name: "TestBox" })(
  sx({
    width: "362px",
  })
)

export {
  SignupSuccessMain,
  SignupSuccessBox,
  SignupSuccessLogo,
  SignupSuccessTextBox,
  SignupSuccessText,
  SignupSuccessLink,
  SignupSuccessBUttonBox,
  TestBox,
}
