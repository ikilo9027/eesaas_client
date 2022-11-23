import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import CssBaseline from "@mui/material/CssBaseline"

interface Props {
  bgColor: string
  contentColor: string
}

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
  color: "#b0b8c1",
}

const footerInfo = {
  color: "#b0b8c1",
}

export default function FooterSimple(props: Props): JSX.Element {
  const { bgColor, contentColor } = props

  return (
    <footer style={{ width: "100%" }}>
      <CssBaseline />
      <Box
        // px={{ xs: 12, sm: 30 }}
        // py={{ xs: 5, sm: 8 }}
        bgcolor={bgColor}
        sx={{
          display: "flex",
          p: "71px 0",
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
              mb: "50px",
            }}
          >
            <Box sx={{ pb: "50px" }}>
              <Typography
                variant="h5"
                color="#B73A3C"
                sx={{
                  fontWeight: "bold",
                }}
              >
                ESPRESO
              </Typography>
            </Box>
            <Box sx={gridContent}>
              <Link
                href="/"
                underline="hover"
                sx={{ gridLink, color: contentColor }}
                // variant=""
              >
                Content
              </Link>
            </Box>
            <Box sx={gridContent}>
              <Link
                href="/"
                underline="hover"
                sx={{ gridLink, color: contentColor }}
              >
                Content
              </Link>
            </Box>
            <Box sx={gridContent}>
              <Link
                href="/"
                underline="hover"
                sx={{ gridLink, color: contentColor }}
              >
                Content
              </Link>
            </Box>
            <Box sx={gridContent}>
              <Link href="/" underline="hover" sx={footerPolicy}>
                개인정보처리방침
              </Link>
            </Box>
            <Box sx={{}}>
              <Box sx={footerInfo}>(주)에스프레소미디어</Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

FooterSimple.defaultProps = {
  bgColor: "#000000",
  contentColor: "#ffffff",
}
