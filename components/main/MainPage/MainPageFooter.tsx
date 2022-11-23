import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"

const gridTitle = {
  height: "30px",
  color: "#b0b8c1",
  fontWeight: "600",
}

const gridContent = {
  height: "30px",
}

const gridLink = {
  color: "#6b7684",
}

const footerPolicy = {
  color: "#0D0D0D",
}

const footerInfo = {
  color: "##0D0D0D",
}

export default function FooterSimple(): JSX.Element {
  return (
    <footer style={{ width: "100%" }}>
      <CssBaseline />
      <Box
        // px={{ xs: 12, sm: 30 }}
        // py={{ xs: 5, sm: 8 }}
        bgcolor={"#ffffff"}
        sx={{
          display: "flex",
          p: "64px 0px 27px 0px",
          // justifyContent: "center",
          // width: "100vh",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              xs: 6,
            }}
          >
            <Box sx={{ pb: "30px" }}>
              {/* <img src={"/favicon.png"} style={{ width: 51, height: 48 }} /> */}
              <img
                src={"/AiAM_logoTypo.webp"}
                style={{ width: 130, height: 48 }}
              />
            </Box>
            {/* <Box sx={gridContent}>
              <Link
                href="/"
                underline="hover"
                sx={{ gridLink, color: "#5E5E5E" }}
                // variant=""
              >
                Content
              </Link>
            </Box> */}
            <Box sx={{ fontSize: "13px", lineHeight: "24px" }}>
              <Box>
                서울시 관악구 남부순환로 1797 8층
              </Box>
              <Box>
                TEL.02.876.0030 | FAX.02.875.0030 | kyh@espresomedia.com{" "}
              </Box>
              <Link href="/auth/privacy" underline="hover" sx={footerPolicy}>
                개인정보처리방침
              </Link>
              <Box sx={{ color: "#7B7B7B" }}>
                <Box>(주)에스프레소미디어</Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

FooterSimple.defaultProps = {}
