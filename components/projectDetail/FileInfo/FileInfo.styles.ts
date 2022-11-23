import { Card, Typography } from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const FileInfoCardMain = styled(Card, { name: "FileInfoCardMain" })(
  sx({
    width: "100%",
    height: { xs: "auto", sm: "176px", md: "176px", lg: "176px", xl: "176px" },
    borderRadius: "14px",
    padding: "25px 24px",
    // mt: { xs: "16px", sm: "16px", md: "0px", lg: "0px", xl: "0px" },
  })
)

const TitleTypography = styled(Typography, { name: "TitleTypography" })({
  variant: "h6",
  fontWeight: "bold",
  color: "black",
}) as typeof Typography

const KeyTypography = styled(Typography, { name: "KeyTypography" })({
  variant: "body1",
  fontWeight: "regular",
  color: "#5E5E5E",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}) as typeof Typography

const ValueTypography = styled(Typography, { name: "ValueTypography" })({
  variant: "body1",
  fontWeight: "medium",
  color: "black",
  height: "24px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}) as typeof Typography

export { FileInfoCardMain, TitleTypography, KeyTypography, ValueTypography }
