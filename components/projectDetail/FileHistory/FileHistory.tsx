import * as React from "react"
import {
  FileHistoryMain,
  TitleTypography,
  WrapCardBox,
} from "./FileHistory.styles"
import { FileHistoryCard } from "./FileHistoryCard"

export default function FileHistory() {
  return (
    <FileHistoryMain>
      <WrapCardBox>
        <TitleTypography>히스토리</TitleTypography>
        <FileHistoryCard />
      </WrapCardBox>
    </FileHistoryMain>
  )
}
