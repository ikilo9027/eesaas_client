import * as React from "react"
import { AppBar as MuiAppBar } from "@mui/material"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import Container from "@mui/material/Container"
// import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
// import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@components/common/IconButton"
import CssBaseline from "@mui/material/CssBaseline"
// Define type of property
interface Props {
  position: "absolute" | "fixed" | "relative" | "static" | "sticky"
  color: "inherit" | "primary" | "secondary"
  textColor: "inherit" | "primary" | "secondary"
  title?: string
  leftIcon?: string
  action1?: string
  action2?: string
}

const pages = ["서비스 소개", "제품", "가격 정책", "회사 소개"]

export default function AppBar(props: Props): JSX.Element {
  const { position, color, textColor, action1, action2, leftIcon, title } =
    props

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  //   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //     null
  //   )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  //   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorElUser(event.currentTarget)
  //   }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null)
  //   }

  return (
    <>
      <CssBaseline />
      <MuiAppBar color={color} position={position} elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                icon={leftIcon}
                // style={{ marginLeft: -12, marginRight: 20 }}
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton>
              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  color={textColor}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button color={textColor}>{action2}</Button>
              <Button color={textColor}>{action1}</Button>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  )
}

// Set default properties
AppBar.defaultProps = {
  position: "fixed",
  color: "inherit",
  textColor: "inherit",
  leftIcon: "menu",
  title: "Material-UI",
  action1: "로그인",
  action2: "",
}
