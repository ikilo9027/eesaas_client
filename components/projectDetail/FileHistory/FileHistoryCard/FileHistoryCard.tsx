import * as React from "react"
import Typography from "@mui/material/Typography"
import ChipsArray from "@components/common/ChipsArray"
import Grid from "@mui/material/Grid"
import Modal from "@components/common/Modal"
import Menu from "@components/common/Menu"
import {
  FileHistoryCardMain,
  HistoryCardMediaBox,
  HistoryCardMedia,
  InfoTypography,
  HistoryCardContentBox,
  HistoryCardContent,
  HistoryCardContentMain,
  FileNameTypography,
  MenuButtonBox,
  TypeTypography,
  DateTypography,
  HistoryCardActionsBox,
  HistoryCardCheckbox,
} from "./FileHistoryCard.styles"
import { HistoryDataValue } from "../hooks/HistoryData"
import { deleteSrHistroy } from "@components/api/modules/file"

export interface CompareData {
  date: string
  filename: string
  status: "ready" | "processing" | "processed"
  id: number
  signedurl: string
}

export default function FileHistoryCard() {
  const { historyData, setHistoryData } = HistoryDataValue()
  const [compareCheck, setCompareCheck] = React.useState([false])
  const [check, setCheck] = React.useState<number[]>([])
  React.useEffect(() => {
    if (historyData.length !== 0) {
      const compareCheckPreData = new Array(historyData.length)
        .fill(false)
        .map((data, index) => (index === check[0] ? true : data))
      const compareCheckData = compareCheckPreData.map((data, index) =>
        index === check[1] ? true : data
      )
      setCompareCheck(compareCheckData)
    }
  }, [check, historyData.length])

  async function onDelete(id: number) {
    let params = {
      fileId: id,
    }
    await deleteSrHistroy(params).then(() => {
      let result = historyData.filter((data) => data.id !== id)
      setHistoryData(result)
      setCheck((curr) => curr.filter((item) => item !== id))
    })
  }

  const handleOnChange = (index: number) => {
    let checkDuplicate = compareCheck[index]
    let removedItem = checkDuplicate && check.splice(check.indexOf(index), 1)

    const setCheckLimit = checkDuplicate ? [...check] : [...check, index]
    const checkLength = setCheckLimit.length === 3 && setCheckLimit.shift()
    const compareLimit = compareCheck.map((item, checkIndex) =>
      checkIndex === index ? !item : item
    )
    const setCompareLimit = compareCheck.map((item, checkIndex) =>
      setCheckLimit.indexOf(checkIndex) === -1 ? false : true
    )
    setCompareCheck(setCompareLimit)
    setCheck(setCheckLimit)
  }

  return (
    <>
      <FileHistoryCardMain>
        <InfoTypography component="div">
          변환했던 파일을 비교하여보세요
        </InfoTypography>
        <Modal historyData={historyData} check={check} />
      </FileHistoryCardMain>

      <Grid container>
        {historyData.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "100%",
                md: "48%",
                lg: "48%",
                xl: "48%",
              },
              pb: 1,
            }}
          >
            <HistoryCardMediaBox>
              <HistoryCardMedia
                component="img"
                image={item.signedUrl}
                alt="Image"
              />
              <HistoryCardContentBox>
                <HistoryCardContent>
                  <HistoryCardContentMain>
                    <FileNameTypography component="div">
                      {item.filename}
                    </FileNameTypography>
                    <MenuButtonBox>
                      <Menu
                        iconTheme="TwoTone"
                        iconColor="rgb(35, 47, 52, 0.8)"
                        onDelete={onDelete}
                        fileInfo={item}
                        deleteStatus={index === 0 ? true : false}
                      />
                    </MenuButtonBox>
                  </HistoryCardContentMain>
                  {index === 0 ? (
                    <TypeTypography component="div">원본</TypeTypography>
                  ) : (
                    <ChipsArray status={item.srStatus} />
                  )}

                  <DateTypography component="div">{item.date}</DateTypography>
                </HistoryCardContent>
                <HistoryCardActionsBox>
                  <HistoryCardCheckbox
                    disabled={item.srStatus === "processing" ? true : false}
                    checked={!!compareCheck[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <Typography
                    component="div"
                    variant="body2"
                    color={compareCheck[index] === true ? "#C32632" : "#424242"}
                  >
                    비교하기
                  </Typography>
                </HistoryCardActionsBox>
              </HistoryCardContentBox>
            </HistoryCardMediaBox>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
