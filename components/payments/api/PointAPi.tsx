import axios, { AxiosResponse } from "axios"

export interface GetSuccessPointProps {
  point: number
}

export const GetSuccessPoint = async (userId: string | null) => {
  const point: AxiosResponse<GetSuccessPointProps> = await axios({
    url: `${process.env.NEXT_PUBLIC_URL}/payments/point/${userId}`,
    method: "get",
    headers: { "Content-Type": "application/json" },
  })

  return point
}
