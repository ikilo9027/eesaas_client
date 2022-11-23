import React from "react"
import ImageZoom from "@/hooks/ImageZoom"

interface Props {
  leftImage: string
  rightImage: string
  leftImageLabel: string
  rightImageLabel: string
  zoom: string
}

export default function ImgZoom(props: Props) {
  const { leftImage, rightImage, leftImageLabel, rightImageLabel, zoom } = props

  return (
    <ImageZoom
      src={leftImage}
      leftImageLabel={leftImageLabel}
      rightImage={rightImage}
      rightImageLabel={rightImageLabel}
      zoom={zoom}
      alt="Image"
      width="100%"
      height="100%"
    />
  )
}
