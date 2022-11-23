import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

interface Props {
  width: string
  height: string
  video: string
  title: string
}

export default function VideoCard(props: Props) {
  const { width, height, video, title } = props

  return (
    <Card sx={{ width: width }}>
      <CardMedia
        component="video"
        controls
        // width="600"
        // height="233"
        // poster=""
        src={video}
      />
      <CardContent sx={{ pt: "8px" }}>
        <Typography
          // gutterBottom
          variant="h6"
          fontWeight="medium"
          component="div"
          sx={{ color: "#0D0D0D" }}
        >
          {title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              파일형식
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              크기
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              해상도
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              영상 길이
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              mp4
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              10 MB
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              640 x 425
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              00:10
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              비트레이트
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              코덱
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              색 영역
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="light"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              프레임 레이트
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              568.2 Kbps
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              H.264
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              YUV420p
            </Typography>
            <Typography
              component="div"
              variant="body1"
              fontWeight="medium"
              // color="text.secondary"
              sx={{ color: "#5E5E5E" }}
            >
              60FPS
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
