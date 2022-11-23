import * as React from "react"
import { ChargeSuccess } from "@components/payments/charge/ChargeSuccess"
import { ChargeFail } from "@components/payments/charge/ChargeFail"
import { useRouter } from "next/router"
import { RequestPayResponse } from "iamport-typings"
import { KCPComplete, KCPVerify } from "@components/payments/PG/KCP"

export default function PaymentResult() {
  const [successOpen, setSuccessOpen] = React.useState<boolean>(false)
  const router = useRouter()
  const {
    userId,
    paid_amount,
    redirect_url,
    imp_uid,
    merchant_uid,
    imp_success,
  } = router.query

  const successHandleClose = () => {
    // %2F replace to /
    if (typeof redirect_url === "string") {
      const redirectUrl = redirect_url.replace(/%2F/g, "/")
      setSuccessOpen(false)
      router.push(redirectUrl)
    }
  }

  const mobileVerify = async () => {
    if (imp_success) {
      if (
        typeof userId === "string" &&
        typeof imp_uid === "string" &&
        typeof merchant_uid === "string" &&
        typeof paid_amount === "string"
      ) {
        const userIdReplace = userId.replace(/%40/g, "@")
        const paid_amount_number = parseInt(paid_amount)
        const rsp: RequestPayResponse = {
          success: true,
          name: "포인트 충전",
          imp_uid: imp_uid,
          merchant_uid: merchant_uid,
          status: "paid",
          paid_amount: paid_amount_number,
        }
        KCPComplete(userIdReplace, rsp)
        const verifyData = await KCPVerify(rsp.imp_uid, rsp.merchant_uid)
        if (verifyData.data.status !== "success") {
          router.push("/payment/paymentresult" + "?imp_success=false")
        }
      }
    }
  }

  React.useEffect(() => {
    mobileVerify()
  })

  return imp_success === "false" ? (
    <ChargeFail successOpen={true} successHandleClose={successHandleClose} />
  ) : (
    <ChargeSuccess successOpen={true} successHandleClose={successHandleClose} />
  )
}
