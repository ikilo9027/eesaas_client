import { Typography, Card, Box } from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const FileHistoryMain = styled(Card, { name: "FileHistoryMain" })(
  sx({
    position: "relative",
    borderRadius: "14px",
    mt: "16px",
  })
)

const WrapCardBox = styled(Box, { name: "WrapCardBox" })(
  sx({
    display: "block",
    position: "relative",
    padding: "24px 25px",
    boxSizing: "border-box",
    height: "100%",
  })
)

const TitleTypography = styled(Typography, { name: "TitleTypography" })({
  variant: "h6",
  fontWeight: "bold",
  color: "black",
}) as typeof Typography

export { FileHistoryMain, TitleTypography, WrapCardBox }
