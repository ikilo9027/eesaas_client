import StaticticsTable from "@components/common/StaticticsTable"
import { useEffect, useState } from "react"
import SelectBox from "@components/common/SelectBox"
import { StaticsDataProvider } from "./hooks/StatisticsData"
import { StaticsDataValue } from "@components/statistics/hooks/StatisticsData"
import { getStatisticsList } from "@components/api/modules/statistics"
import {
  StatisticsInfoTitleUl,
  StatisticsInfoTitleLi,
  StatisticsInfoContentUl,
  StatisticsInfoContentLi,
  StatisticsInfoBox,
  MultipleSelectBox,
  SelectTypography,
  SearchButton,
} from "./Statistics.styles"

export interface StaticsDataProps {
  buyTime: string
  id: number
  paymentAmount: number
  paymentNameList: string
  refundPurchase: string
  userId: string
}

export default function Statistics() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [rows, setRows] = useState<StaticsDataProps[]>([])
  const [totalModel, setTotalModel] = useState(0)
  const [totalPoint, setTotalPoint] = useState(0)

  async function fetchGetStatisticsList() {
    let requestBody = {
      startDate: `${year}-0${month}-01`,
      endDate: `${year}-0${month + 1}-01`,
    }
    await getStatisticsList(requestBody).then((data) => {
      setRows(data.data.statisticsList)
    })
  }

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  useEffect(() => {
    setTotalModel(0)
    setTotalPoint(0)
    if (rows.length > 0) {
      let point = 0
      rows.forEach((row) => {
        // console.log('row-0------------', Number(row.paymentAmount))
        point = point + row.paymentAmount
      })
      setTotalModel(rows.length)
      setTotalPoint(point)
    }
  }, [rows])
  useEffect(() => {
    fetchGetStatisticsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month])

  return (
    <StatisticsInfoBox>
      <StatisticsInfoTitleUl>
        <StatisticsInfoTitleLi>총 모델</StatisticsInfoTitleLi>
        <StatisticsInfoTitleLi>사용된 포인트</StatisticsInfoTitleLi>
        {/* <StatisticsInfoTitleLi>Total Convert Time</StatisticsInfoTitleLi> */}
      </StatisticsInfoTitleUl>
      <StatisticsInfoContentUl>
        <StatisticsInfoContentLi>
          {numberWithCommas(totalModel)}
        </StatisticsInfoContentLi>
        <StatisticsInfoContentLi style={{ borderLeft: "2px solid " }}>
          {numberWithCommas(totalPoint)}
        </StatisticsInfoContentLi>
        {/* <StatisticsInfoContentLi style={{ borderLeft: '2px solid ' }}>0</StatisticsInfoContentLi> */}
      </StatisticsInfoContentUl>
      <MultipleSelectBox>
        <SelectBox label="년" date={year} setDate={setYear} />
        <SelectTypography>년</SelectTypography>
        <SelectBox label="월" date={month} setDate={setMonth} />
        <SelectTypography>월</SelectTypography>
        {/* <SearchButton label='Search' /> */}
      </MultipleSelectBox>
      <StaticsDataProvider>
        <StaticticsTable rows={rows} />
      </StaticsDataProvider>
    </StatisticsInfoBox>
  )
}
