import React, { useState, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

const Figure = styled.figure`
  position: relative;
  display: inline-block;
  width: auto;
  min-height: 25vh;
  background-position: 50% 50%;
  background-color: #eee;
  margin: 0;
  overflow: hidden;
//   cursor: zoom-in;
//   cursor: ${(props) => (props.cursor === "0" ? "zoom-in" : "zoom-out")}
  ${(props) =>
    props.cursor === "0"
      ? css`
          cursor: zoom-out;
        `
      : css`
          cursor: zoom-in;
        `}}
  &:before {
    content: "";
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #333;
    border-right-color: #333;
    border-bottom-color: #333;
    animation: ${rotate} 2s linear infinite;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    z-index: 2;
  }
  &.loaded {
    min-height: auto;
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 0;
    }
  }
`

const Img = styled.img`
  //   transition: opacity 0.8s;
  display: block;
`

const styles = {
  leftLabel: {
    // width: "100%",
    // height: "100%",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "25px 25px 25px 25px",
    left: "3.1%",
    opacity: 1,
    padding: "10px 20px",
    position: "absolute",
    top: "1.8%",
  },
  rightLabel: {
    // width: "100%",
    // height: "100%",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "25px 25px 25px 25px",
    opacity: 1,
    padding: "10px 20px",
    position: "absolute",
    left: null,
    right: "3.1%",
    top: "1.8%",
    bottom: null,
  },
}

function ImageZoom(props) {
  // define and set default values to the states of the component
  const [zoomed, setZoomed] = useState("1")
  const [position, setPosition] = useState("50% 50%")
  const [leftImageData, setLeftImageData] = useState(null)
  const [rightImageData, setRightImageData] = useState(null)
  // convert state data into strings to be used as helper classes
  let figureClass = leftImageData || rightImageData ? "loaded" : "loading"
  let figureZoomed = zoomed === "0" ? "zoomed" : "fullView"

  function zoomInPosition(e) {
    // this will handle the calculations of the area where the image needs to zoom in depending on the user interaction
    const zoomer = e.currentTarget.getBoundingClientRect()
    let x, y, offsetX, offsetY
    offsetX = e.clientX - zoomer.x
    offsetY = e.clientY - zoomer.y
    x = (offsetX / zoomer.width) * 100
    y = (offsetY / zoomer.height) * 100
    setPosition(`${x}% ${y}% `)
    // OLD JQUERY CODE FOR REF ONLY
    // e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    // e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageX;
    // console.log({offsetX, offsetY});
    // x = offsetX/zoomer.offsetWidth*100;
    // y = offsetY/zoomer.offsetHeight*100;
  }

  function toggleZoomImage(e) {
    if (zoomed === "0") {
      // zoom out
      setZoomed("1")
    } else {
      //zoom in and set the background position correctly
      setZoomed("0")
      zoomInPosition(e)
    }
  }

  function handleClick(e) {
    // Handle the click events
    toggleZoomImage(e)
  }

  function handleMove(e) {
    // Handle the mouse move events
    if (zoomed === "0") {
      zoomInPosition(e)
    }
  }

  function handleLeave() {
    // Resets the state of the component on mouse leave
    setZoomed("1")
    setPosition("50% 50%")
  }

  useEffect(() => {
    // This checks if the prop src was passed when the component was called and throw an error if this is null or set to empty
    if (
      props.src === "" ||
      props.src == null ||
      props.rightImage === "" ||
      props.rightImage == null
    ) {
      throw new Error(
        "Prop src and rightImage must be defined when using ImageZoom component!"
      )
    }

    // Set initial state on component mount
    setZoomed("0")
    let img = new Image()
    img.src = props.src
    img.rightImage = props.rightImage
    img.addEventListener("load", () => {
      // gracefully disable the loading animation
      setZoomed("1")
      setLeftImageData(img.src)
      setRightImageData(img.rightImage)
      // setTimeout(() => {
      //     setZoomed("1")
      //     setLeftImageData(img.src)
      //     setRightImageData(img.rightImage)
      // }, 100)
    })
  }, [])

  return (
    <>
      <Figure
        id={props.id}
        className={[figureClass, figureZoomed, props.className].join(" ")}
        style={{
          backgroundImage: "url(" + leftImageData + ")",
          backgroundSize: props.zoom + "%",
          backgroundPosition: position,
        }}
        cursor={zoomed}
        onClick={(e) => handleClick(e)}
        // onMouseMove={(e) => handleMove(e)}
        // onMouseLeave={() => handleLeave()}
      >
        <Img
          id="imageZoom"
          src={leftImageData}
          alt={props.alt}
          style={{ opacity: zoomed }}
          width={props.width}
          height={props.height}
        />

        <div style={styles.leftLabel}>{props.leftImageLabel}</div>
      </Figure>
      <Figure
        id={props.id}
        className={[figureClass, figureZoomed, props.className].join(" ")}
        style={{
          marginLeft: "3px",
          backgroundImage: "url(" + rightImageData + ")",
          backgroundSize: props.zoom + "%",
          backgroundPosition: position,
        }}
        cursor={zoomed}
        onClick={(e) => handleClick(e)}
        onMouseMove={(e) => handleMove(e)}
        // onMouseLeave={() => handleLeave()}
      >
        <Img
          id="imageZoom"
          src={rightImageData}
          alt={props.alt}
          style={{ opacity: zoomed }}
          width={props.width}
          height={props.height}
        />

        <div style={styles.rightLabel}>{props.rightImageLabel}</div>
      </Figure>
    </>
  )
}

ImageZoom.defaultProps = {
  zoom: "200",
  alt: "This is an imageZoom image",
  width: "100%",
  height: "auto",
}

export default ImageZoom
