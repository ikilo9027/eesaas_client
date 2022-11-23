import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Button from "@components/common/Button"
import { RequestPayParams, RequestPayResponse } from "iamport-typings"
import { KCPComplete, KCPVerify } from "./KCP"
import { ChargeSuccess } from "../charge/ChargeSuccess"

const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID ?? ""

interface Props {
  pay: number
  check: boolean
  payClose: () => void
}

export interface initialPayProps {
  pg: string
  pay_method: string
  name: string
  merchant_uid: string
  userId: string
  imp_uid: string
  status?: string
  amount: number
  buyer_tel: string
  m_redirect_url: string
}

const initialState: RequestPayParams = {
  pg: "kcp",
  pay_method: "card", // 결제수단
  name: "포인트 충전", // 주문명
  merchant_uid: "espresomedia_" + new Date().getTime(), // 주문번호
  amount: 100, // 결제금액
  buyer_tel: "000-000-0000",
  m_redirect_url: `${process.env.NEXT_PUBLIC_MOBILE_REDIRECT_URL}/payment/paymentresult`, // 모바일 결제시 사용할 url
  // digital: false, // 실제 물품인지 무형의 상품인지(핸드폰 결제에서 필수 파라미터)
  // app_scheme: , // 모바일 앱 결제중 앱복귀를 위한 URL scheme(WebView 결제시 필수)
}

const Payment = (props: Props) => {
  const { pay, check, payClose } = props
  const [params, setParams] = useState<RequestPayParams>(initialState)
  const [successOpen, setSuccessOpen] = React.useState<boolean>(false)
  const successHandleClose = () => setSuccessOpen(false)

  const userId = sessionStorage.getItem("userId")

  const router = useRouter()

  useEffect(() => {
    setParams({
      ...params,
      merchant_uid: "espresomedia_" + new Date().getTime(),
      m_redirect_url: `${process.env.NEXT_PUBLIC_MOBILE_REDIRECT_URL}/payment/paymentresult?userId=${userId}&paid_amount=${pay}&redirect_url=${router.asPath}`,
      amount: pay,
      buyer_email: userId != null ? userId : "username@domain.com",
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pay])

  const onClickPayment = () => {
    const { IMP } = window

    if (IMP) {
      IMP.init(IMP_UID)
      console.log(params)
      IMP.request_pay(params, onPaymentAccepted)
      payClose()
    }
  }

  const onPaymentAccepted = async (rsp: RequestPayResponse) => {
    if (rsp.success) {
      KCPComplete(userId, rsp)
      const verifyData = await KCPVerify(rsp.imp_uid, rsp.merchant_uid)
      if (verifyData.data.status === "success") {
        router.push(`/payment/paymentresult?redirect_url=${router.asPath}`)
      } else {
        router.push(
          `/payment/paymentresult?imp_success=false&redirect_url=${router.asPath}`
        )
      }
    }
  }

  return (
    <>
      <Button
        onClick={() => onClickPayment()}
        label="충전하기"
        borderRadius="4px"
        disabled={pay > 0 && check === true ? false : true}
      />
      <ChargeSuccess
        successOpen={successOpen}
        successHandleClose={successHandleClose}
      />
    </>
  )
}

export default Payment
