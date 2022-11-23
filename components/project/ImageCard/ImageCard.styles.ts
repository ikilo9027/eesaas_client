import {
  Container,
  Box,
  Typography,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

const ContainerBox = styled(Container, { name: "ContainerBox" })(
  sx({
    maxWidth: {
      xs: "375px",
      sm: "678px",
      md: "1011px",
      lg: "1296px",
      xl: "1296px",
    },
    p: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 },
    marginLeft: { xs: "auto", sm: "auto", md: 0, lg: "auto", xl: "auto" },
    marginRight: { xs: "auto", sm: "auto", md: 0, lg: "auto", xl: "auto" },
  })
)

const ImageCardMain = styled(Box, { name: "ImageCardMain" })(
  sx({
    display: "grid",
    flexGrow: 1,
    flexDirection: "column",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(3, 1fr)",
    },
    width: { xs: "100%", sm: "297px", md: "297px", lg: "382px", xl: "408px" },
    px: { xs: "0px", sm: "0px", md: "2px", lg: "2px", xl: "2px" },
    pb: 2,
    gap: 0.5,
    position: "relative",
    left: { xs: "0px", sm: "0px", md: "0px", lg: "0px", xl: "80px" },
  })
)

const ImageListItemBox = styled(ImageListItem, { name: "ImageListItemBox" })(
  sx({
    display: "inline-block",
    marginTop: "36px",
    verticalAlign: "top",
    boxSizing: "border-box",
    // width: { xs: "100%" },
    px: { xs: "0px", sm: "18px", md: "18px", lg: "15px", xl: "18px" },
  })
)

const ImageListItemBarBox = styled(ImageListItemBar, {
  name: "ImageListItemBarBox",
})(
  sx({
    width: 80,
    background: "rgba(0,0,0,0)",
  })
)

const CardBox = styled(Box, { name: "CardBox" })(
  sx({
    overflow: "hidden",
    position: "relative",
    backgroundColor: "white",
    borderRadius: "14px",
    boxShadow: "4px 12px 30px 6px rgb(0, 0, 0, .2)",
    // width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "408px" },
    width: { xs: "100%", sm: "297px", md: "297px", lg: "382px", xl: "408px" },
    maxWidth: {
      xs: "375px",
      sm: "678px",
      md: "1011px",
      lg: "1296px",
      xl: "1296px",
    },
    height: { xs: "auto", sm: "396px", md: "396px", lg: "396px", xl: "466px" },
  })
)

const WrapCardBox = styled(Box, { name: "WrapCardBox" })(
  sx({
    display: "block",
    position: "relative",
    padding: "25px 24px 0",
    boxSizing: "border-box",
    height: "100%",
  })
)

const IconCardBox = styled(Box, { name: "IconCardBox" })({
  display: "block",
  height: "36px",
  marginTop: "-1px",
  paddingRight: "20px",
})

const CardLinkBox = styled(Box, { name: "CardLinkBox" })(
  sx({
    display: "block",
    margin: "0 -24px",
    cursor: "pointer",
    overflowWrap: "break-word",
    textAlign: "left",
    textDecorationColor: "rgb(51, 51, 51)",
    textDecorationLine: "none",
    textDecorationStyle: "solid",
    textDecorationThickness: "auto",
    textSizeAdjust: "100%",
    wordBreak: "keep-all",
    // width: { xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "408px" },
    // height: { xs: "280px", sm: "323px", md: "323px", lg: "323px", xl: "393px" },
  })
)

const ImageCardBox = styled(Box, { name: "ImageCardBox" })(
  sx({
    display: "block",
    // height: { xs: "79%", sm: "255px", md: "255px", lg: "255px", xl: "306px" },
    height: { xs: "auto", sm: "255px", md: "255px", lg: "255px", xl: "306px" },
    mt: { xs: "19px", sm: "36px", md: "36px", lg: "36px", xl: "47px" },
    overflowWrap: "break-word",
    textAlign: "left",
    textDecorationColor: "rgb(51, 51, 51)",
    textDecorationLine: "none",
    textDecorationStyle: "solid",
    textDecorationThickness: "auto",
    textSizeAdjust: "100%",
    wordBreak: "keep-all",
  })
)

const TitleCardBox = styled(Box, { name: "TitleCardBox" })(
  sx({
    color: "rgb(0, 0, 0)",
    display: "-webkit-box",
    // maxWidth: { xs: "552px", sm: "339px", md: "340px", lg: "382px", xl: "408px" },
    height: { xs: "40px", sm: "32px", md: "32px", lg: "32px", xl: "40px" },
    fontSize: "20px",
    fontWeight: 700,
    overflowWrap: "break-word",
    overflowX: "hidden",
    overflowY: "hidden",
    textAlign: "left",
    textDecorationThickness: "auto",
    textSizeAdjust: "100%",
    wordBreak: "keep-all",
    lineHeight: { xs: "36px", sm: "32px", md: "32px", lg: "32px", xl: "40px" },
    overflow: "hidden",
    marginTop: "13px",
    padding: "0 24px",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
  })
)

const InfoCardBox = styled(Box, { name: "InfoCardBox" })(
  sx({
    position: "absolute",
    // marginTop: "24px",
    top: { xs: "109px", sm: "114px", md: "114px", lg: "114px", xl: "126px" },
    height: { xs: "19px", sm: "19px", md: "19px", lg: "19px", xl: "20px" },
    left: "0",
    right: "84px",
    paddingLeft: "24px",
    fontWeight: "300",
    fontSize: "13px",
    lineHeight: "19px",
    color: "#4E5A68",
    overflow: "hidden",
  })
)

const NextjsImageBox = styled(Box, { name: "NextjsImageBox" })(
  sx({
    display: "block",
    position: "relative",
    minHeight: "100%",
  })
)

const MenuButtonBox = styled(Box, { name: "MenuButtonBox" })(
  sx({
    display: "block",
    overflow: "hidden",
    position: "absolute",
    top: { xs: "30px", sm: "21px", md: "21px", lg: "21px", xl: "21px" },
    right: "14px",
    zIndex: 20,
    width: "24px",
    height: "28px",
  })
)

const MultipleFileUploadBox = styled(Box, { name: "MultipleFileUploadBox" })(
  sx({
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "1251px",
      xl: "1269px",
    },
    height: "150px",
    position: "relative",
    px: { xs: "0px", sm: "18px", md: "18px", lg: "18px", xl: "0px" },
    left: { xs: "0px", sm: "0px", md: "0px", lg: "0px", xl: "120px" },
  })
)

const EmptyFileUploadBox = styled(Box, { name: "EmptyFileUploadBox" })(
  sx({
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    p: "60px 0px",
    textAlign: "center",
    height: "50vh",
    left: { xl: "120px" },
  })
)

const EmptyFileUploadContentBox = styled(Box, {
  name: "EmptyFileContentUploadBox",
})(
  sx({
    width: "275px",
    height: "145px",
  })
)

const EmptyFileUploadTextBox = styled(Box, {
  name: "EmptyFileUploadTextBox",
})(
  sx({
    width: "275px",
    lineHeight: "24px",
    fontSize: "15px",
    fontWeight: 500,
    color: "#777",
  })
)

const TitleCardTypography = styled(Typography, { name: "TitleCardTypography" })(
  {
    fontSize: "20px",
    fontWeight: "bold",
    overflow: "hidden",
  }
) as typeof Typography

export {
  ContainerBox,
  ImageCardMain,
  ImageListItemBox,
  ImageListItemBarBox,
  CardBox,
  WrapCardBox,
  IconCardBox,
  CardLinkBox,
  ImageCardBox,
  TitleCardBox,
  InfoCardBox,
  NextjsImageBox,
  MenuButtonBox,
  MultipleFileUploadBox,
  EmptyFileUploadBox,
  EmptyFileUploadContentBox,
  EmptyFileUploadTextBox,
  TitleCardTypography,
}
