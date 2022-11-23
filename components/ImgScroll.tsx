import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const ImageBox = styled(Box)({
  position: "static",
  backgroundImage: `url("960x540_image.jpg")`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  //   backgroundSize: "100% 450px",
  height: "900px",
})

const AfterBox = styled(Box)({
  position: "static",
  backgroundImage: `url("960x540_image_RE_x2.jpg")`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  //   backgroundSize: "100% 450px",
  height: "900px",
})

const LineBox = styled(Box)({
  height: "1px",
  background: "black",
})

const ImgScroll = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "1800px" }}>
        <ImageBox />
        <LineBox />
        <AfterBox />
      </Box>
      <Box sx={{ width: "100%", height: "900px" }} />
    </>
  )
}

export default ImgScroll
