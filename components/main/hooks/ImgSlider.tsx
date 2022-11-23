import ReactCompareImage from "./ImgCompareSlider"

interface Props {
  leftImage: string
  rightImage: string
  leftImageLabel: string
  rightImageLabel: string
  containerHeight: number
  borderRadius?: string
}

export default function ImgSlider(props: Props) {
  const {
    leftImage,
    rightImage,
    leftImageLabel,
    rightImageLabel,
    containerHeight,
    borderRadius,
  } = props

  return (
    <ReactCompareImage
      leftImage={leftImage}
      leftImageLabel={leftImageLabel}
      rightImage={rightImage}
      rightImageLabel={rightImageLabel}
      sliderLineWidth={3}
      hover
      containerHeight={containerHeight}
      borderRadius={borderRadius}
    />
  )
}

ImgSlider.defaultProps = {}
