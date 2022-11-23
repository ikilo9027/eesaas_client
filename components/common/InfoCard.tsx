import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

interface FileDataProps {
  type: any
  title: string
  url: string
  format: string
  size: string
  resolution: string
  time: string
  bitrate: string
  codec: string
  colorSpace: string
  fps: string
}

interface Props {
  fileData: FileDataProps
  width: string
  height: string
  video: string
  title: string
}

interface videoCardDataKoProps {
  [key: string]: string
}

const videoCardDataKo: videoCardDataKoProps = {
  format: "파일형식",
  size: "크기",
  resolution: "해상도",
  time: "영상 길이",
  bitrate: "비트레이트",
  codec: "코덱",
  colorSpace: "색 영역",
  fps: "프레임 레이트",
}

export default function VideoCard(props: Props) {
  const { fileData, width, height } = props
  console.log(Object.keys(fileData))

  return (
    <Card sx={{ width: width }}>
      <CardMedia
        component={fileData.type}
        controls
        // width="600"
        // height="233"
        // poster=""
        src={fileData.url}
      />
      <CardContent sx={{ pt: "8px" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          component="div"
          sx={{ color: "black" }}
        >
          {fileData.title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[3]]}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[4]]}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[5]]}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[6]]}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.format)}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.size)}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.resolution)}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.time)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[7]]}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[8]]}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[9]]}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="regular"
              sx={{ color: "#5E5E5E" }}
            >
              {videoCardDataKo[Object.keys(fileData)[10]]}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.bitrate)}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.codec)}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.colorSpace)}
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              sx={{ color: "black" }}
            >
              {Object.values(fileData.fps)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

VideoCard.defaultProps = {
  width: 896,
  height: 624,
  video:
    "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
  title: "Video",
}
