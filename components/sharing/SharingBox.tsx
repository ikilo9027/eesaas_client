import StaticticsTable from "@components/common/StaticticsTable"
import { useEffect, useState } from "react"
import SelectBox from "@components/common/SelectBox"
// import { StaticsDataProvider } from "./hooks/StatisticsData"
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
} from "./SharingBox.styles"

export default function SharingBox() {
  return (
    <div style={{ border: '1px solid red' }}>
      {/* <Select
        options={options}
        placeholder='Language'
        labelKey='label'
        valueKey='value'
        onChange={({ option }) => {
          changeLang(option.value);
        }}
        alignSelf='end'
        size='small'
        style={{
          width: '150px',
        }}
      ></Select> */}
    </div>
    // <StatisticsInfoBox>

    // </StatisticsInfoBox>
  )
}
