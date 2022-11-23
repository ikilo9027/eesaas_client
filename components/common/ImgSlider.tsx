import ReactCompareImage from "@/hooks/ImgCompareSlider"

interface Props {
  leftImage: string
  rightImage: string
  leftImageLabel: string
  rightImageLabel: string
}

export default function ImgSlider(props: Props) {
  const { leftImage, rightImage, leftImageLabel, rightImageLabel } = props
  return (
    <ReactCompareImage
      leftImage={leftImage}
      leftImageLabel={leftImageLabel}
      rightImage={rightImage}
      rightImageLabel={rightImageLabel}
      sliderLineWidth={3}
      hover
    />
  )
}

ImgSlider.defaultProps = {}
