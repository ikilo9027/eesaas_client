import { Box, Typography, Button as MuiButton } from "@mui/material"
import { styled, experimental_sx as sx, fontWeight } from "@mui/system"

const BarPaymnetsMain = styled(Box, { name: "BarPaymnetsMain" })(
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2b2d36",
    p: "40px 16px 16px 16px",
    height: "184px",
    // mt: 1,
    // mb: 2,
  })
)

const PaymnetsMain = styled(Box, { name: "PaymnetsMain" })(
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  })
)

const UserInfoBox = styled(Box, { name: "UserInfoBox" })(
  sx({
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: 500,
    color: "white",
  })
)

const BarPaymnetsTypography = styled(Typography, {
  name: "BarPaymnetsTypography",
})({
  fontSize: "14px",
  fontWeight: 500,
  color: "white",
}) as typeof Typography

const PaymnetsTypography = styled(Typography, { name: "PaymnetsTypography" })({
  fontSize: "16px",
  fontWeight: 600,
  color: "white",
}) as typeof Typography

export {
  BarPaymnetsMain,
  PaymnetsMain,
  UserInfoBox,
  BarPaymnetsTypography,
  PaymnetsTypography,
}
