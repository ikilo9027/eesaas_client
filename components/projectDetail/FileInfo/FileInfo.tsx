import * as React from "react"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import {
  FileInfoCardMain,
  TitleTypography,
  KeyTypography,
  ValueTypography,
} from "./FileInfo.styles"

export interface FileInfoDataProps {
  type: "image" | "video"
  fileName: string
  format: string
  size: string
  // resolution: string
  resolution_heigth: number
  resolution_width: number
  time: string
  bitrate: string
  codec: string
  fps: string
}

interface Props {
  fileType: string
  fileInfoData: FileInfoDataProps
}

interface FileInfodDataKoProps {
  [key: string]: string
}

const fileInfoDataKo: FileInfodDataKoProps = {
  fileName: "이름",
  format: "파일형식",
  size: "크기",
  resolution: "해상도",
  time: "영상 길이",
  bitrate: "비트레이트",
  codec: "코덱",
  fps: "프레임",
}

export default function FileInfo(props: Props) {
  const { fileType, fileInfoData } = props
  const keyList = Object.keys(fileInfoData)
  const valueList = Object.values(fileInfoData)
  const imageInfoKeyList = keyList.slice(0, 4)
  const imageInfoValueList = valueList.slice(0, 4)
  const videoInfoKeyList = keyList.slice(4)
  const videoInfoValueList = valueList.slice(4)
  return (
    <FileInfoCardMain>
      <TitleTypography component="div">파일 정보</TitleTypography>
      <CardContent
        sx={{
          p: "8px 0px 0px 0px",
        }}
      >
        <Grid container>
          {fileType === "image" ? (
            <>
              <Grid item xs={4} sm={2} md={3} lg={3} xl={3}>
                {imageInfoKeyList.map((key, index) => (
                  <KeyTypography key={index} component="div">
                    {fileInfoDataKo[key]}
                  </KeyTypography>
                ))}
              </Grid>
              <Grid item xs={8} sm={10} md={9} lg={9} xl={9}>
                {imageInfoValueList.map((key, index) => (
                  <ValueTypography key={index} component="div">
                    {key}
                  </ValueTypography>
                ))}
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={4} sm={2} md={3} lg={3} xl={3}>
                {imageInfoKeyList.map((key, index) => (
                  <KeyTypography key={index} component="div">
                    {fileInfoDataKo[key]}
                  </KeyTypography>
                ))}
              </Grid>
              <Grid item xs={8} sm={4} md={3} lg={3} xl={3}>
                {imageInfoValueList.map((key, index) => (
                  <ValueTypography key={index} component="div">
                    {key}
                  </ValueTypography>
                ))}
              </Grid>
            </>
          )}

          {fileType === "video" && (
            <>
              <Grid item xs={4} sm={2} md={3} lg={3} xl={3}>
                {videoInfoKeyList.map((key, index) => (
                  <KeyTypography key={index} component="div">
                    {fileInfoDataKo[key]}
                  </KeyTypography>
                ))}
              </Grid>
              <Grid item xs={8} sm={4} md={3} lg={3} xl={3}>
                {videoInfoValueList.map((key, index) => (
                  <ValueTypography
                    key={index}
                    component="div"
                  // sx={{ width: "108px" }}
                  >
                    {key}
                  </ValueTypography>
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </FileInfoCardMain>
  )
}
