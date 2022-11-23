import { Box, Card, Typography, Container } from "@mui/material"
import { styled, experimental_sx as sx } from "@mui/system"

let drawerWidth = 240

const ProjectDetailContainer = styled(Container, {
  name: "ProjectDetailContainer",
})(
  sx({
    maxWidth: {
      sm: "600px",
      md: "900px",
      lg: "1536px",
      xl: "1296px",
    },
  })
)

const ProjectDetailBox = styled(Box, { name: "ProjectDetailBox" })(
  sx({
    display: "flex",
    flexDirection: "column",
    maxWidth: 929,
    // minWidth: 467,
  })
)

const FileCardBox = styled(Box, { name: "FileCardBox" })(
  sx({
    display: "flex",
    // flexDirection: "column",
    // width: {
    //   lg: `calc(100% - 240px)`,
    //   xl: `calc(100% - 240px)`,
    // },
    // height: {
    //   xs: `calc(100% - 64px)`,
    //   sm: `calc(100% - 64px)`,
    //   md: `calc(100% - 64px)`,
    //   lg: `calc(100% - 64px)`,
    //   xl: `calc(100% - 64px)`,
    // },
    px: 2,
    position: "relative",
    left: {
      xs: "0px",
      sm: "0px",
      md: "0px",
      lg: drawerWidth,
      xl: drawerWidth,
    },
    // top: "64px",
  })
)

const FileInfoSrBox = styled(Box, { name: "FileInfoSrBox" })(
  sx({
    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      sm: "column-reverse",
      md: "row",
      lg: "row",
      xl: "row",
    },
    justifyContent: "space-between",
    width: "100%",
    pt: 2,
    px: 2,
    position: "relative",
    left: {
      xs: "0px",
      sm: "0px",
      md: "0px",
      lg: drawerWidth,
      xl: drawerWidth,
    },
  })
)

const FileHistoryBox = styled(Box, { name: "FileHistoryBox" })(
  sx({
    display: "flex",
    flexDirection: "column",
    px: 2,
    position: "relative",
    left: {
      xs: "0px",
      sm: "0px",
      md: "0px",
      lg: drawerWidth,
      xl: drawerWidth,
    },
    maxWidth: 929,
  })
)

export {
  ProjectDetailContainer,
  ProjectDetailBox,
  FileCardBox,
  FileInfoSrBox,
  FileHistoryBox,
}
