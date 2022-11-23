import {
  Box,
  Card,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button as MuiButton,
} from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"
import Button from "@components/common/Button"

const FileSRCardMain = styled(Card, { name: "FileSRCardMain" })(
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 176,
    borderRadius: "14px",
    ml: { md: "16px", lg: "16px", xl: "16px" },
    mb: { xs: "16px", md: "16px" },
    padding: "25px 24px",
    boxShadow: "4px 12px 30px 6px rgba(195, 38, 50, 0.1)",
  })
)

const TitleTypography = styled(Typography, { name: "TitleTypography" })({
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  color: "black",
}) as typeof Typography

const SrButton = styled(Button, { name: "SrButton" })({
  width: "108px",
  borderRadius: "4px",
})

const SrMainBox = styled(Box, { name: "SrMainBox" })(
  sx({
    width: "100%",
  })
)

const SrDialog = styled(Dialog, { name: "SrDialog" })(
  sx({
    left: { xl: "112px" },
  })
)

const SrDialogContent = styled(DialogContent, { name: "SrDialogContent" })(
  sx({
    width: "100%",
  })
)

const SrImageTypographyBox = styled(Box, { name: "SrImageTypographyBox" })(
  sx({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    mt: 4,
  })
)

const SrImageBox = styled(Box, { name: "SrImageBox" })(
  sx({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "300px",
  })
)

const SrImage = styled(Box, { name: "SrImage" })(
  sx({
    position: "relative",
    width: "50%",
    height: "100%",
    borderRadius: "14px",
    cursor: "pointer",
  })
)

const SrDialogActions = styled(DialogActions, { name: "SrDialogActions" })(
  sx({
    display: "flex",
    justifyContent: "space-between",
    px: 3,
    pb: 2,
  })
)

const SrTypography = styled(Typography, { name: "SrTypography" })({
  fontWeight: "bold",
  color: "black",
}) as typeof Typography

const SrFormatBox = styled(Box, { name: "SrFormatBox" })(
  sx({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })
)

const SrSettingTypographyBox = styled(Box, { name: "SrSettingTypographyBox" })(
  sx({
    fontSize: "12px",
    color: "#4E5A68",
    lineHeight: 2.5,
  })
)

const SrPaymentTitleTypographyBox = styled(Box, {
  name: "SrPaymentTitleTypographyBox",
})(
  sx({
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 2.5,
  })
)

const SrPaymentContentBox = styled(Box, {
  name: "SrPaymentContentBox",
})(
  sx({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 2.5,
    width: "100%",
  })
)
const SrChargeBox = styled(Box, {
  name: "SrChargeBox",
})(
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
    color: "#4E5A68",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.5,
    width: "100%",
    height: "65px",
    px: 2,
    my: 2,
  })
)

const SrCharge = styled(Box, {
  name: "SrCharge",
})(
  sx({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  })
)
const BalanceBox = styled(Box, {
  name: "BalanceBox",
})(
  sx({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#4E5A68",
    fontSize: "14px",
    fontWeight: 600,
    mt: 2,
  })
)

const BalanceButton = styled(MuiButton, {
  name: "BalanceButton",
})(
  sx({
    width: "80px",
    height: "30px",
    borderRadius: "4px",
    backgroundColor: "#AEB7C2",
    color: "white",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#AEB7C2",
    },
  })
)

const SrPaymentProductTypographyBox = styled(Box, {
  name: "SrPaymentProductTypographyBox",
})(
  sx({
    color: "#4E5A68",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 2.0,
  })
)

export {
  FileSRCardMain,
  TitleTypography,
  SrMainBox,
  SrButton,
  SrDialog,
  SrTypography,
  SrFormatBox,
  SrDialogContent,
  SrImageTypographyBox,
  SrImageBox,
  SrImage,
  SrDialogActions,
  SrSettingTypographyBox,
  SrPaymentTitleTypographyBox,
  SrPaymentContentBox,
  SrChargeBox,
  SrCharge,
  BalanceBox,
  BalanceButton,
  SrPaymentProductTypographyBox,
}
