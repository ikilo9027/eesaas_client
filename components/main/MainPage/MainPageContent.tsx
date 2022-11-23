import { ImgSlider, useScrollFadeIn } from "../hooks"
import { Box, Container, CardMedia, Typography } from "@mui/material"
import Button from "@components/common/Button"
export default function MainPageContent() {

  const imageLogo = [
    "/logo/naver_logo.png",
    "/logo/cyworld_logo.png",
    "/logo/lguplus_logo.png",
    "/logo/watcha_logo.png",
  ]

  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.2),
    2: useScrollFadeIn("up", 1, 0.3),
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "300px",
          backgroundColor: "#F7F7F7",
          lineHeight: "44px",
          p: "24px 32px 0px 32px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#0D0D0D",
          }}
        >
          더 나은 이미지 품질을 위한 서비스

        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "medium", color: "#424242" }}
        >
          AI 기술을 통해 품질 손실 없이 이미지 해상도를 향상시켜보세요.
        </Typography>
      </Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
              lg: "row",
              xl: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            pt: "100px",
            pb: "30px",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },
              maxWidth: "560px",
              mt: { xs: "24px", sm: "24px", md: "0px", lg: "0px", xl: "0px" },
            }}
          >
            <Typography
              fontSize="36px"
              fontWeight={700}
              lineHeight="44px"
              sx={{ marginBottom: "0.55em" }}
            >
              인물에 특화된 AI 서비스
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={400}
              lineHeight="26px"
              color="#424242"
              sx={{
                marginBottom: "0.55em",
                maxWidth: "460px",
                overflowWrap: "break-word",
              }}
            >
              Face Enhance 기술을 통해 얼굴에 특화하여 사진의 해상도와 품질을 높일 수 있습니다.
            </Typography>
          </Box>
          <Box
            sx={{
              px: "15px",
              maxWidth: "630px",
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },
              height: "auto",
            }}
          >
            <ImgSlider
              leftImage="/mainPageImage/sampleOriginal.jpeg"
              rightImage="/mainPageImage/sampleOriginalSR.jpeg"
              leftImageLabel="Before"
              rightImageLabel="After"
              containerHeight={460}
              borderRadius="15px"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            pt: "30px",
            pb: "100px",
          }}
        >
          <Box
            sx={{
              px: "15px",
              maxWidth: "630px",
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },
              height: "auto",
            }}
          >
            <ImgSlider
              leftImage="/mainPageImage/sampleOriginal2.webp"
              rightImage="/mainPageImage/sampleOriginal2SR.webp"
              leftImageLabel="Before"
              rightImageLabel="After"
              containerHeight={460}
              borderRadius="15px"
            />
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },
              maxWidth: {
                xs: "560px",
                sm: "560px",
                md: "516px",
                lg: "516px",
                xl: "516px",
              },
              px: "15px",
              mt: { xs: "24px", sm: "24px", md: "0px", lg: "0px", xl: "0px" },
            }}
          >
            <Typography
              fontSize="36px"
              fontWeight={700}
              lineHeight="44px"
              sx={{ marginBottom: "0.55em" }}
            >
              다양한 산업에서의 활용
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight={400}
              lineHeight="26px"
              color="#424242"
              sx={{
                marginBottom: "0.55em",
                maxWidth: "460px",
                overflowWrap: "break-word",
              }}
            >
              품질 저하 없이 제품의 해상도를 높여 다양한 분야에서 활용해 보세요.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          //   height: "300px",
          backgroundColor: "#F7F7F7",
          lineHeight: "44px",
          p: "40px 32px 0px 32px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#0D0D0D",
          }}
        >
          다양한 기업과 협업하고 있습니다.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "space-around",
              md: "space-around",
              lg: "space-around",
              xl: "space-around",
            },
            backgroundColor: "#F7F7F7",
            pb: "20px",
          }}
        >
          {imageLogo.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "125px",
                  sm: "140px",
                  md: "140px",
                  lg: "140px",
                  xl: "140px",
                },
                m: {
                  xs: "0px 12px 24px 12px",
                  sm: 0,
                  md: 0,
                  lg: 0,
                  xl: 0,
                },
                p: "32px 0px 32px 0px",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "125px",
                    sm: "140px",
                    md: "140px",
                    lg: "140px",
                    xl: "140px",
                  },
                  height: "130px",
                }}
              >
                <CardMedia
                  component="img"
                  src={image}
                  sx={{
                    position: "relative",
                    objectFit: "fill",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "300px",
          backgroundColor: "#C32632",
          lineHeight: "44px",
          p: "24px 32px 0px 32px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#ffffff",
            mb: "32px",
          }}
        >
          에스프레소미디어의 AI 기술을 활용해 보세요.
        </Typography>
        <Button
          href="/workspace"
          color="white"
          label="시작하기"
          width="145px"
          height="48px"
          borderRadius="25px"
        ></Button>
      </Box>
    </>
  )
}
