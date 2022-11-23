import ReactCompareImage from "@/hooks/ImgCompareSlider"

interface Props {
  leftImageList: string[]
  rightImageList: string[]
  originImageList: string[]
}

export default function VideoSlider(props: Props) {
  const { leftImageList, rightImageList, originImageList } = props
  console.log("leftImageList, rightImageList, originImageList", leftImageList, rightImageList, originImageList)
  return (
    <ReactCompareImage
      leftImage={leftImageList[0]}
      // leftImageLabel={leftImageLabel}
      rightImage={rightImageList[0]}
      // rightImageLabel={rightImageLabel}
      sliderLineWidth={3}
      hover
    />
  )
}

VideoSlider.defaultProps = {}