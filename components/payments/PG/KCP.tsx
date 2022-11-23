import axios from "axios"
import { RequestPayResponse } from "iamport-typings"

export const KCPComplete = async (
  userId: string | null,
  props: RequestPayResponse
) => {
  await axios({
    url: `${process.env.NEXT_PUBLIC_URL}/payments/complete`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: {
      userId: userId,
      name: props.name,
      imp_uid: props.imp_uid,
      merchant_uid: props.merchant_uid,
      status: props.status,
      paid_amount: props.paid_amount,
    },
  })
}

export const KCPVerify = async (
  imp_uid: string | string[] | undefined | null,
  merchant_uid: string | string[] | undefined
) => {
  const data = await axios({
    url: `${process.env.NEXT_PUBLIC_URL}/payments/verify?imp_uid=${imp_uid}&merchant_uid=${merchant_uid}`,
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
  return data
}
