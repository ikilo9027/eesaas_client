import Button from "@components/common/Button"
import { ImgSlider } from "../hooks"
import { Box, Container, CardMedia } from "@mui/material"
import Image from "next/image"

export default function MainPageTitle() {
  return (
    <Container>
      <Box
        sx={{
          pt: "160px",
          pb: "80px",
        }}
      >
        <Box sx={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ px: "15px" }}>
              <Box
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "48px",
                    sm: "64px",
                    md: "64px",
                    lg: "64px",
                    xl: "64px",
                  },
                  lineHeight: {
                    xs: "56px",
                    sm: "66px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                  mb: "24px",
                  overflowWrap: "anywhere",
                }}
              >
                SUPER RESOLUTION
              </Box>
              <Box
                sx={{
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  mb: "24px",
                  overflowWrap: "break-word",
                  color: "#424242",
                }}
              >
                에스프레소미디어의 AI 기술을 활용하여 저화질 이미지를 고해상도 이미지로 변환시켜보세요.
              </Box>
              <Button
                href="/workspace"
                label="시작하기"
                width="145px"
                height="48px"
                borderRadius="25px"
              />
            </Box>
            <Box
              sx={{
                px: "15px",
                py: "20px",
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "600px",
                  lg: "600px",
                  xl: "600px",
                },
                maxWidth: "600px",
                height: "auto",
              }}
            >
              {/* <Image src="/favicon.png" alt="Image" width={600} height={600} /> */}
              <ImgSlider
                leftImage="/mainPageImage/mainPageTitleSample.jpg"
                rightImage="/mainPageImage/mainPageTitleSampleSR.jpg"
                leftImageLabel="Before"
                rightImageLabel="After"
                containerHeight={600}
                borderRadius="15px"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
