import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button as MuiButton,
} from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const ChargeTextField = styled(TextField, { name: "ChargeTextField" })(
  sx({
    width: "100%",
    mb: 4,
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
  })
)

const ChargePayButton = styled(MuiButton, {
  name: "ChargePayButton",
})(
  sx({
    borderColor: "#C6CBD1",
    color: "black",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "white",
      borderColor: "#C6CBD1",
    },
    "& .MuiTouchRipple-root span": {
      color: "black",
      backgroundColor: "white",
      borderColor: "#C6CBD1",
    },
  })
)

const ChargeCheckbox = styled(Checkbox, { name: "ChargeCheckbox" })(
  sx({
    width: "18px",
    height: "18px",
    mr: "0.75rem",
    color: "#CDCDCD",
    "&.Mui-checked": {
      color: "#C32632",
    },
  })
)

const ChargePointAmount = styled(Box, { name: "ChargePointAmount" })(
  sx({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    width: "100%",
    mt: 6,
    mb: 1,
    fontWeight: 700,
    color: "black",
  })
)

const ChargeAmount = styled(Box, { name: "ChargeAmount" })(
  sx({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    width: "100%",
    mt: 1,
    mb: 2,
    fontWeight: 700,
    color: "black",
  })
)

const ChargeButton = styled(MuiButton, {
  name: "ChargeButton",
})(
  sx({
    borderRadius: "0.5rem",
    width: "112px",
    height: "34px",
    ml: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    color: "white",
    fontSize: "16px",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.16)",
    },
  })
)

const ChargeTosBox = styled(Box, { name: "ChargeTosBox" })(
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#4E5A68",
    backgroundColor: "#F3F3F3",
    fontSize: "11px",
    fontWeight: "400",
    width: "100%",
    p: 1,
    mt: 3,
  })
)

const ChargeTosTextBox = styled(Box, { name: "ChargeTosTextBox" })(
  sx({
    fontSize: "13px",
    lineHeight: 1.5,
    width: "100%",
    mb: 3,
    fontWeight: 500,
    color: "#4E5A68",
  })
)

export {
  ChargeTextField,
  ChargePayButton,
  ChargePointAmount,
  ChargeAmount,
  ChargeCheckbox,
  ChargeButton,
  ChargeTosBox,
  ChargeTosTextBox,
}
