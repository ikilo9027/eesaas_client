//@ts-nocheck
import React, { useEffect, useRef, useState } from "react"

interface IProps {
  aspectRatio?: "taller" | "wider"
  handle?: React.ReactNode
  handleSize?: number
  hover?: boolean
  leftImage: string
  leftImageAlt?: string
  leftImageCss?: object
  leftImageLabel?: string
  onSliderPositionChange?: (position: number) => void
  rightImage: string
  rightImageAlt?: string
  rightImageCss?: object
  rightImageLabel?: string
  skeleton?: React.ReactNode
  sliderLineColor?: string
  sliderLineWidth?: number
  sliderPositionPercentage?: number
  vertical?: boolean
}

const defaultProps = {
  aspectRatio: "taller",
  handle: null,
  handleSize: 40,
  hover: false,
  leftImageAlt: "",
  leftImageCss: {},
  leftImageLabel: null,
  onSliderPositionChange: () => {},
  rightImageAlt: "",
  rightImageCss: {},
  rightImageLabel: null,
  skeleton: null,
  sliderLineColor: "#ffffff",
  sliderLineWidth: 2,
  sliderPositionPercentage: 0.5,
  vertical: false,
}

const ReactCompareImage: React.FC<IProps> = (props) => {
  const {
    leftImage,
    leftImageAlt,
    leftImageCss,
    leftImageLabel,
    rightImage,
    rightImageAlt,
    rightImageCss,
    rightImageLabel,
    skeleton,
    sliderPositionPercentage,
    vertical,
  } = props

  const horizontal = !vertical

  // 0 to 1
  const [sliderPosition, setSliderPosition] = useState<number>(
    sliderPositionPercentage
  )
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const [leftImgLoaded, setLeftImgLoaded] = useState<boolean>(false)
  const [rightImgLoaded, setRightImgLoaded] = useState<boolean>(false)
  const [isSliding, setIsSliding] = useState<boolean>(false)

  const containerRef = useRef(null)
  const rightImageRef = useRef(null)
  const leftImageRef = useRef(null)

  // make the component responsive
  useEffect(() => {
    const containerElement = containerRef.current
    const resizeObserver = new ResizeObserver(([entry, ..._]) => {
      const currentContainerWidth = entry.target.getBoundingClientRect().width
      setContainerWidth(currentContainerWidth)
    })
    resizeObserver.observe(containerElement)

    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    // consider the case where loading image is completed immediately
    // due to the cache etc.
    const alreadyDone = leftImageRef.current.complete
    alreadyDone && setLeftImgLoaded(true)

    return () => {
      // when the left image source is changed
      setLeftImgLoaded(false)
    }
  }, [leftImage])

  useEffect(() => {
    // consider the case where loading image is completed immediately
    // due to the cache etc.
    const alreadyDone = rightImageRef.current.complete
    alreadyDone && setRightImgLoaded(true)

    return () => {
      // when the right image source is changed
      setRightImgLoaded(false)
    }
  }, [rightImage])

  const allImagesLoaded = rightImgLoaded && leftImgLoaded

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "relative",
      // width: "100%",
      // height: `${containerHeight}px`,
      width: "calc(50% - 1px)",
      height: "100%",
      // maxHeight: "calc(100% - 40px)",
      // objectFit: "fill",
      // overflow: "hidden",
    },
    rightImage: {
      display: "block",
      height: "auto",
      maxHeight: "100%",
      objectFit: "cover",
      position: "absolute",
      width: "auto",
      maxWidth: "100%",
      ...rightImageCss,
    },
    leftImage: {
      display: "block",
      height: "auto",
      maxHeight: "100%",
      objectFit: "cover",
      position: "absolute",
      width: "auto",
      maxWidth: "100%",
      ...leftImageCss,
    },
    leftLabel: {
      background: "rgba(0, 0, 0, 0.5)",
      color: "white",
      fontWeight: "bold",
      borderRadius: "25px 25px 25px 25px",
      left: horizontal ? "40px" : "50%",
      opacity: isSliding ? 0 : 1,
      padding: "10px 20px",
      position: "absolute",
      top: horizontal ? "40px" : "3%",
      transform: horizontal ? "translate(0,-50%)" : "translate(-50%, 0)",
      transition: "opacity 0.1s ease-out",
    },
    rightLabel: {
      background: "rgba(0, 0, 0, 0.5)",
      color: "white",
      fontWeight: "bold",
      borderRadius: "25px 25px 25px 25px",
      opacity: isSliding ? 0 : 1,
      padding: "10px 20px",
      position: "absolute",
      left: horizontal ? null : "50%",
      right: horizontal ? "40px" : null,
      top: horizontal ? "40px" : null,
      bottom: horizontal ? null : "3%",
      transform: horizontal ? "translate(0,-50%)" : "translate(-50%, 0)",
      transition: "opacity 0.1s ease-out",
    },
    leftLabelContainer: {
      height: "100%",
      position: "absolute",
      width: "100%",
    },
    rightLabelContainer: {
      height: "100%",
      position: "absolute",
      width: "100%",
    },
  }

  return (
    <>
      {skeleton && !allImagesLoaded && (
        <div style={{ ...styles.container }}>{skeleton}</div>
      )}

      <div
        style={{
          ...styles.container,
          display: allImagesLoaded ? "flex" : "none",
        }}
        ref={containerRef}
        data-testid="container"
      >
        <img
          onLoad={() => setLeftImgLoaded(true)}
          alt={leftImageAlt}
          data-testid="left-image"
          ref={leftImageRef}
          src={leftImage}
          style={styles.leftImage}
        />
        {/* labels */}
        {leftImageLabel && (
          <div style={styles.leftLabelContainer}>
            <div style={styles.leftLabel}>{leftImageLabel}</div>
          </div>
        )}
      </div>
      <div style={{ height: "100%", color: "white", width: "2px" }}></div>
      <div
        style={{
          ...styles.container,
          display: allImagesLoaded ? "flex" : "none",
        }}
        ref={containerRef}
        data-testid="container"
      >
        <img
          onLoad={() => setRightImgLoaded(true)}
          alt={rightImageAlt}
          data-testid="right-image"
          ref={rightImageRef}
          src={rightImage}
          style={styles.rightImage}
        />
        {/* labels */}
        {rightImageLabel && (
          <div style={styles.rightLabelContainer}>
            <div style={styles.rightLabel}>{rightImageLabel}</div>
          </div>
        )}
      </div>
    </>
  )
}

// @ts-ignore
ReactCompareImage.defaultProps = defaultProps

export default ReactCompareImage
