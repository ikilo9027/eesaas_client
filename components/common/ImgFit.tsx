import ReactCompareImage from "@/hooks/ImgCompareFit"

interface Props {
  leftImage: string
  rightImage: string
  leftImageLabel: string
  rightImageLabel: string
}

export default function ImgFit(props: Props) {
  const { leftImage, rightImage, leftImageLabel, rightImageLabel } = props
  return (
    <ReactCompareImage
      leftImage={leftImage}
      leftImageLabel={leftImageLabel}
      rightImage={rightImage}
      rightImageLabel={rightImageLabel}
    />
  )
}
