import * as React from "react"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"

interface Props {
  type: any
  url: string
  width: string
  height: string
  video: string
  title: string
}

export default function fileCard(props: Props) {
  const { type, url, width, height } = props

  return (
    <Card sx={{ width: width }}>
      <CardMedia
        component={type}
        controls
        // width="600"
        // height="233"
        // poster=""
        src={url}
      />
    </Card>
  )
}

fileCard.defaultProps = {
  width: 896,
  height: 624,
  video:
    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=415&h=293&fit=crop&auto=format",
  title: "Image",
}
