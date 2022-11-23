import { Box, Typography, Button as MuiButton } from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const SignupBox = styled(Box, { name: "SignupBox" })(
  sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "stretch",
    minHeight: { md: "100vh", lg: "100vh", xl: "100vh" },
  })
)

const SignupLogoBox = styled(Box, { name: "SignupLogoBox" })(
  sx({
    display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
    alignItems: "center",
    flexDirection: "column",

    width: "100%",
    maxWidth: "899px",
    px: "20px",
    m: 0,
  })
)

const SignupLogo = styled(Box, { name: "SignupLogo" })(
  sx({
    position: "relative",
    display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
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
    p: 0,
  })
)

const SignupMain = styled(Box, { name: "SignupMain" })(
  sx({
    display: "flex",
    alignItems: "center",
    background: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: {
      xs: "0 auto",
      sm: "0 atuo",
      md: "auto 0",
      lg: "auto 0",
      xl: "auto 0",
    },
    maxWidth: "800px",
  })
)

const SignupContentBox = styled(Box, { name: "SignupContentBox" })(
  sx({
    display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
    alignItems: "center",
    background: "black",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  })
)

const SignupContent = styled(Box, { name: "SignupContent" })(
  sx({
    maxWidth: "680px",
    padding: "0px 40px",
    fontSize: "1rem",
    lineHeight: 1.5,
  })
)

const SignupContentText = styled(Box, { name: "SignupContentText" })(
  sx({
    color: "white",
    fontWeight: 600,
    fontSize: "1.286rem",
    margin: "2rem 0",
  })
)

const SignupForm = styled(Box, { name: "SignupForm" })(
  sx({
    maxWidth: "720px",
    minWidth: "320px",
    padding: "40px",
  })
)

const SignupCreateBox = styled(Box, { name: "SignupCreateBox" })(
  sx({
    textAlign: "center",
  })
)

const SignupCreate = styled(Box, { name: "SignupCreate" })(
  sx({
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: 1.2,
  })
)
const SignupAlready = styled(Box, { name: "SignupAlready" })(
  sx({
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    mt: "16px",
    color: "#4E5A68",
  })
)

const SignupTextBox = styled(Box, { name: "SignupTextBox" })(
  sx({
    fontSize: "1rem",
    lineHeight: 1.5,
    mb: "21px",
  })
)

const SignupContextLogo = styled(Box, { name: "SignupCOntextLogo" })(
  sx({
    display: "block",
    mb: "40px",
    maxWidth: "350px",
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
    mt: "16px",
    "&:hover": {
      width: "100%",
      height: "46px",
      backgroundColor: "white",
      border: 1,
      borderColor: "#E0E0E0",
    },
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

const SignupTypography = styled(Typography, { name: "SignupTypography" })({
  fontSize: "1rem",
  fontWeight: 600,
  color: "black",
  mb: "0.5em",
}) as typeof Typography

const PolicyTypography = styled(Typography, { name: "PolicyTypography" })({
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "black",
  mb: "0.5em",
}) as typeof Typography

export {
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
}
