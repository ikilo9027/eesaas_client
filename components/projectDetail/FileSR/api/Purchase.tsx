import axios, { AxiosResponse } from "axios"

export interface SuccessPurchaseProps {
  status: string
  message: string
}

export const Purchase = async (
  userId: string | null,
  paymentNameList: string[],
  paymentAmount: number
) => {
  const res: AxiosResponse<SuccessPurchaseProps> = await axios({
    url: `${process.env.NEXT_PUBLIC_URL}/payments/purchase`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: {
      userId: userId,
      paymentNameList: paymentNameList,
      paymentAmount: paymentAmount,
    },
  })

  return res
}
