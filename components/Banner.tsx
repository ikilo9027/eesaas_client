// @ts-nocheck
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { useScrollFadeIn } from "../src/hooks"

const BannerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "500px",
  p: "120px 0",
  backgroundColor: "gray",
})

// @ts-nocheck
const Banner = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        height: "300px",
        p: "120px 0",
        backgroundColor: "gray",
      }}
    >
      {/* <BannerBox> */}
      <Typography {...animatedItem[0]}>Get Started</Typography>
      <Typography {...animatedItem[1]}>
        Etiam erat velit
        <br />
        scelerisque in dictum
      </Typography>
      <Typography {...animatedItem[2]}>Get a Quote</Typography>
      {/* <S.Label {...animatedItem[0]}>Get Started</S.Label> */}

      {/* <S.Title {...animatedItem[1]}>
          Etiam erat velit
          <br />
          scelerisque in dictum
        </S.Title>
        <div {...animatedItem[2]}>
          <Button fill="solid" type="button">
            Get a Quote
          </Button>
        </div> */}
    </Box>
    // </BannerBox>
  )
}

export default Banner
