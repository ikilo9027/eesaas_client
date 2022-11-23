import { Box, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"
import Button from "@components/common/Button"

const ProjectCardMain = styled(Box, { name: "ProjectCardMain" })(
  sx({
    display: "grid",
    flexGrow: 1,
    flexDirection: "column",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      sm: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(2, 1fr)",
      xl: "repeat(2, 1fr)",
    },
    px: { xs: "0px", sm: "0px", md: "2px", lg: "2px", xl: "2px" },
    pb: 2,
    gap: 0.5,
    position: "relative",
    left: { xs: "0px", sm: "0px", md: "0px", lg: "0px", xl: "80px" },
  })
)

const ButtonBox = styled(Box, { name: "ButtonBox" })(
  sx({
    // display: "flex",
    // justifyContent: "end",
    float: "right",
    // width: { xs: "100%", sm: "98%", md: "98%", lg: "98%", xl: "1309px" },
  })
)

const CreateProjectButton = styled(Button, { name: "CreateProjectButton" })(
  sx({
    // width: { xs: "110px", sm: "116px", md: "116px", lg: "116px", xl: "116px" },
    height: { xs: "36px", sm: "40px", md: "40px", lg: "40px", xl: "40px" },
    fontSize: {
      xs: "0.8rem",
      sm: "0.875rem",
      md: "0.875rem",
      lg: "0.875rem",
      xl: "0.875rem",
    },
    borderRadius: "4px",
  })
)

const ProjectListItemBox = styled(ImageListItem, {
  name: "ProjectListItemBox",
})(
  sx({
    display: "inline-block",
    marginTop: { xs: "4px", sm: "36px", md: "36px", lg: "36px", xl: "36px" },
    verticalAlign: "top",
    boxSizing: "border-box",
    width: { xs: "100%" },
    px: { xs: "0px", sm: "18px", md: "18px", lg: "15px", xl: "18px" },
  })
)

const WrapCardBox = styled(Box, { name: "WrapCardBox" })(
  sx({
    display: "block",
    position: "relative",
    padding: "24px 25px",
    boxSizing: "border-box",
    height: "100%",
  })
)

const CardLinkBox = styled(Box, { name: "CardLinkBox" })(
  sx({
    // display: "block",
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    width: "auto",
    height: { xs: "80px", sm: "200px", md: "200px", lg: "200px", xl: "200px" },
  })
)

const ProjectBox = styled(Box, { name: "ProjectBox" })(
  sx({
    overflow: "hidden",
    position: "relative",
    backgroundColor: "white",
    borderRadius: "14px",
    boxShadow: "4px 12px 30px 6px rgb(0 0 0 / 9%)",
    // minWidth: "345px",
    width: "auto",
    height: { xs: "auto", sm: "200px", md: "200px", lg: "200px", xl: "200px" },
  })
)

const ImageCardBox = styled(Box, { name: "ImageCardBox" })(
  sx({
    display: "block",
    margin: "-24px 0px -24px -25px",
    width: { xs: "40%", sm: "40%", md: "50%", lg: "45%", xl: "45%" },
    mr: "16px",
  })
)

const NextjsImageBox = styled(Box, { name: "NextjsImageBox" })(
  sx({
    display: "block",
    position: "relative",
    width: "100%",
    height: { xs: "100%", sm: "200px", md: "200px", lg: "200px", xl: "200px" },
  })
)

const InfoMainBox = styled(Box, { name: "InfoMainBox" })(
  sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: { xs: "80px", sm: "138px", md: "138px", lg: "138px", xl: "138px" },
    // overflow: "hidden",
  })
)

const InfoBox = styled(Box, { name: "InfoBox" })(
  sx({
    display: "flex",
    flexDirection: "row",
  })
)

const TitleCardBox = styled(Box, { name: "TitleCardBox" })(
  sx({
    fontSize: "20px",
    color: "black",
    lineHeight: { xs: "40px", sm: "40px", md: "40px", lg: "40px", xl: "40px" },
    fontWeight: "bold",
    // overflow: "hidden",
  })
)

const InfoTitleBox = styled(Box, { name: "InfoTitleBox" })(
  sx({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: "0 24px 0 0",
  })
)

const ProjectMenuBox = styled(Box, { name: "ProjectMenuBox" })(
  sx({
    display: "block",
    overflow: "hidden",
    position: "absolute",
    top: { xs: "22px", sm: "13px", md: "13px", lg: "13px", xl: "13px" },
    right: { xs: "24px", sm: "38px", md: "38px", lg: "38px", xl: "38px" },
  })
)

const InfoTitleTypography = styled(Typography, { name: "InfoTitleTypography" })(
  {
    fontSize: "13px",
    color: "#4E5A68",
    fontWeight: "regular",
  }
) as typeof Typography

const InfoTypographyBox = styled(Box, { name: "InfoTypographyBox" })(
  sx({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    justifyContent: { xs: "space-between" },
  })
)

const InfoTypography = styled(Typography, { name: "InfoTypography" })({
  fontSize: "13px",
  color: "#4E5A68",
  fontWeight: "bold",
}) as typeof Typography

export {
  ProjectCardMain,
  CreateProjectButton,
  ButtonBox,
  ProjectListItemBox,
  WrapCardBox,
  CardLinkBox,
  ProjectBox,
  ImageCardBox,
  NextjsImageBox,
  InfoMainBox,
  InfoBox,
  TitleCardBox,
  InfoTitleBox,
  ProjectMenuBox,
  InfoTitleTypography,
  InfoTypographyBox,
  InfoTypography,
}
