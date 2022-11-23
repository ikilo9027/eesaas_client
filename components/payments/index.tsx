import * as React from "react"
import { Box } from "@mui/material"
import {
  BarPaymnetsMain,
  PaymnetsMain,
  BarPaymnetsTypography,
  UserInfoBox,
  PaymnetsTypography,
} from "./styles"
import { Charge } from "./charge"
import { PointContextValue } from "./hooks/Point"
import { GetSuccessPoint, GetSuccessPointProps } from "./api/PointAPi"
import { AxiosResponse } from "axios"

interface Props {
  mobileOpen: boolean
  barclose: () => void
}

export default function Payments(props: Props) {
  const { mobileOpen, barclose } = props
  const [userId, setUserId] = React.useState<string | null>("")
  const { pointValue, setPointValue } = PointContextValue()

  const pointData = async () => {
    const data: AxiosResponse<GetSuccessPointProps> = await GetSuccessPoint(
      sessionStorage.getItem("userId")
    )
    setPointValue(data.data.point)
  }

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  React.useEffect(() => {
    pointData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  React.useEffect(() => {
    setUserId(sessionStorage.getItem("userId"))
  }, [])

  return (
    <>
      <BarPaymnetsMain>
        <UserInfoBox>{userId}</UserInfoBox>
        <PaymnetsMain>
          <BarPaymnetsTypography>보유 포인트</BarPaymnetsTypography>
          <Box sx={{ display: "flex", mb: 1 }}>
            <PaymnetsTypography>
              {pointValue.toLocaleString("ko-kr")}P
            </PaymnetsTypography>
            {/* <PaymnetsTypography>{numberWithCommas(pointValue)}P</PaymnetsTypography> */}
          </Box>
          <Charge barclose={barclose} />
        </PaymnetsMain>
      </BarPaymnetsMain>
    </>
  )
}
