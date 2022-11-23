import * as React from "react"
import CardMedia from "@mui/material/CardMedia"
import { FileCardMain } from "./FileCard.styles"

interface FileCardDataProps {
  type: "image" | "video"
  url: string
  duration: number
}

interface Props {
  fileCardData: FileCardDataProps
}

export default function FileCard(props: Props) {
  const { fileCardData } = props
  return (
    <FileCardMain>
      <CardMedia
        component={fileCardData.type}
        controls
        src={fileCardData.url}
        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </FileCardMain>
  )
}

export type { FileCardDataProps }
