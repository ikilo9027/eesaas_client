import IconButton from "@components/common/IconButton"
import {
  Box,
  DialogTitle,
  Modal,
  Typography,
  ButtonGroup,
  IconButton as MuiIconButton,
} from "@mui/material"
import RefreshIcon from "@mui/icons-material/Refresh"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined"
import * as React from "react"
import Script from "next/script"
import Link from "next/link"
import {
  ChargePayButton,
  ChargePointAmount,
  ChargeAmount,
  ChargeCheckbox,
  ChargeButton,
  ChargeTosBox,
  ChargeTosTextBox,
} from "./Charge.styles"
import Payment from "../PG"
import { PointContextValue } from "../hooks/Point"

const chargeModalStyle = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 6,
  bgcolor: "background.paper",
  borderRadius: "14px",
  maxWidth: "600px",
  minWidth: "342px",
  p: "20px 24px",
}

interface Props {
  barclose: () => void | undefined
}

interface ChargeModalProps {
  open: boolean
  handleClose: () => void
}

export interface ChargeTitleProps {
  onClose: () => void
}

const ChargeTitle = (props: ChargeTitleProps) => {
  const { onClose } = props

  return (
    <>
      <Typography variant="h6" fontWeight={700}>
        충전
      </Typography>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {onClose ? (
          <IconButton
            icon="Close"
            iconColor="black"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: "10px",
              top: "14px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          />
        ) : null}
      </DialogTitle>
    </>
  )
}

export const ChargeModal = (props: ChargeModalProps) => {
  const { open, handleClose } = props
  const [check, setCheck] = React.useState(false)
  //   const [chargeValue, setChargeValue] = React.useState<string>("")
  const { pointValue } = PointContextValue()
  const [payClicked, setPayClicked] = React.useState<number>(0)

  const pay = [1000, 3000, 6000, 10000]
  const payClick = (index: number) => {
    setPayClicked(payClicked + pay[index])
  }

  const payClose = () => {
    handleClose()
    setCheck(false)
    setPayClicked(0)
  }

  const resetPay = () => {
    setPayClicked(0)
  }

  //   const chargeChange = (event: { target: { value: string } }) => {
  //     setChargeValue(event.target.value.replace(/[^0-9]/g, ""))
  //   }

  return (
    <>
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" />
      <Script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js" />
      <Modal
        open={open}
      // sx={{ "& .MuiBackdrop-root": { backgroundColor: "transparent" } }}
      >
        <Box sx={chargeModalStyle}>
          <ChargeTitle onClose={payClose} />
          <ButtonGroup disableElevation variant="outlined">
            {pay.map((data, index) => (
              <ChargePayButton
                key={index}
                onClick={() => payClick(index)}
                disableRipple={true}
              >
                +{data}원
              </ChargePayButton>
            ))}
          </ButtonGroup>
          <ChargePointAmount>
            <div>충전후 포인트</div>
            <div>{(pointValue + payClicked).toLocaleString("ko-kr")}P</div>
          </ChargePointAmount>
          <ChargeAmount>
            <div>결제금액</div>
            <div>
              {payClicked > 0 && (
                <MuiIconButton sx={{ p: "0px 4px 0px 0px" }}>
                  <RefreshIcon
                    onClick={resetPay}
                    sx={{ mb: "3px", width: "19px", height: "19px" }}
                  />
                </MuiIconButton>
              )}
              {payClicked.toLocaleString("ko-kr")}원
            </div>
          </ChargeAmount>
          <ChargeTosTextBox>
            <ChargeCheckbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={check}
              onChange={() => setCheck(!check)}
            />
            아래 이용안내 및 결제 진행에 동의합니다.
          </ChargeTosTextBox>
          <Box sx={{ mr: "2px", width: "100%" }}>
            <Payment pay={payClicked} check={check} payClose={payClose} />
          </Box>
          <ChargeTosBox>
            <div>
              - 사용되지 않은 금액에 대해서는 7일 이내 청약철회가 가능합니다.
            </div>
            <div>- 이벤트 등 무료로 지급한 금액은 환불되지 않습니다.</div>
            <div>
              - 자세한 내용은 <Link href="/auth/privacy">이용약관</Link>에서
              확인할 수 있습니다.
            </div>
          </ChargeTosBox>
        </Box>
      </Modal>
    </>
  )
}

export default function Charge(props: Props) {
  const { barclose } = props
  const [paymentOpen, setPaymentOpen] = React.useState<boolean>(false)

  const handleOpen = () => {
    barclose()
    setPaymentOpen(true)
  }
  const handleClose = () => {
    setPaymentOpen(false)
  }

  return (
    <>
      <ChargeButton onClick={handleOpen}>충전</ChargeButton>
      <ChargeModal open={paymentOpen} handleClose={handleClose} />
    </>
  )
}
