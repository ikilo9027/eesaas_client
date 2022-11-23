import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import Breadcrumb from "@components/common/Breadcrumb"
import Icon from "@components/common/Icon"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "@/Link"
import Payments from "./payments"
import { PointValueProvider } from "./payments/hooks/Point"
import MainPage from "./main/MainPage"
import StorageVolume from "@components/common/StorageVolume"
import { StorageValueProvider } from "./hooks/Storage"


interface Props {
  backgroundColor: string
  drawerWidth: number
  firstList: readonly string[]
  firstListPath: string[]
  secondList: readonly string[]
  firstListIcon: readonly string[]
  secondListIcon: readonly string[]
}

const StyledList = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: "rgba(195, 38, 50, 0.1)",
    "&, & .MuiListItemIcon-root": {
      color: "#C32632",
    },
  },
  // hover states
  "& .MuiListItem-root:hover": {
    backgroundColor: "#C32632",
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
})

export default function MainHome(props: Props) {
  const {
    backgroundColor,
    drawerWidth,
    firstList,
    firstListPath,
    secondList,
    firstListIcon,
    secondListIcon,
  } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [user, setUser] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath !== "/" && router.asPath.split("/")[1] !== "auth") {
      const user = sessionStorage.getItem("userId")
      if (!user) {
        router.replace("/auth/signin")
      }
      setUser(sessionStorage.getItem("userId"))
    }
  }, [router])

  useEffect(() => {
    firstListPath.map((list, index) => {
      if (list === router.asPath.split("/")[1]) {
        setSelectedIndex(index)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index)
  }

  const loggoutClick = (index: number) => {
    setSelectedIndex(index)
    setMobileOpen(!mobileOpen)
    logout()
  }

  function logout() {
    sessionStorage.removeItem("accessToken")
    sessionStorage.removeItem("refreshToken")
    sessionStorage.removeItem("expiredTime")
    sessionStorage.removeItem("userId")
    router.push("/auth/signin")
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  // mainpage
  if (router.asPath.split("/")[0] !== "#!" && router.asPath === "/") {
    return <MainPage />
  }

  const drawer = (
    <Box>
      <Toolbar
        sx={{
          height: {
            xs: "55px",
            sm: "74px",
            md: "74px",
            lg: "74px",
          },
          minHeight: {
            xs: "55px !important",
            sm: "74px !important",
            md: "74px !important",
            lg: "74px !important",
          },
        }}
      />
      {/* <Divider /> */}
      <StyledList sx={{ p: 0, mb: 1 }}>
        <PointValueProvider>
          <Payments mobileOpen={mobileOpen} barclose={handleDrawerToggle} />
        </PointValueProvider>
        <StorageValueProvider>
          <StorageVolume mobileOpen={mobileOpen} />
        </StorageValueProvider>
        {firstList.map((text, index) => (
          <Link key={index} href={`/${firstListPath[index]}`} color="#5E5E5E">
            <ListItem
              button
              key={index}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                height: { md: 48 },
                minHeight: 48,
                px: 2.5,
              }}
            >
              <ListItemIcon>
                <Icon icon={firstListIcon[index]} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          </Link>
        ))}
      </StyledList>
      <Divider />
      <StyledList>
        {secondList.map((text, index) => (
          <Box key={index} sx={{ color: "#5E5E5E" }}>
            <ListItem
              button
              key={index}
              selected={selectedIndex + 1 === firstList.length + 1}
              onClick={() => loggoutClick(firstList.length + index)}
            >
              <ListItemIcon>
                <Icon icon={secondListIcon[index]} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          </Box>
        ))}
      </StyledList>
    </Box>
  )

  if (!user) {
    return <></>
  } else if (
    router.asPath.split("/")[1] === "auth" ||
    router.asPath.split("/")[1] === "payment"
  ) {
    return <></>
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            color: "#E0E0E0",
            borderBottom: 1,
            backgroundColor: { backgroundColor },
            zIndex: (theme) => theme.zIndex.drawer + 1,
            ml: { lg: `${drawerWidth}px` },
            pr: "0px !important",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: {
                xs: "55px",
                sm: "74px",
                md: "74px",
                lg: "74px",
              },
              minHeight: {
                xs: "55px !important",
                sm: "74px !important",
                md: "74px !important",
                lg: "74px !important",
              },
            }}
          >
            <Link href="/workspace">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                    lineHeight: 0.5,
                  }}
                >
                  <Image
                    src="/favicon.png"
                    alt="Image"
                    width={51}
                    height={48}
                  />
                </Box> */}
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      sm: "none",
                      md: "none",
                      lg: "none",
                      xl: "none",
                    },
                    lineHeight: 0.5,
                  }}
                >
                  <Image
                    src="/logo_name.png"
                    alt="Image"
                    width={130}
                    height={30}
                  />
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "block",
                    },
                    lineHeight: 0.5,
                  }}
                >
                  <Image
                    src="/AiAM_logoTypo.webp"
                    alt="Image"
                    width={130}
                    height={48}
                  />
                </Box>
              </Box>
            </Link>
            <IconButton
              edge="start"
              size="large"
              disableRipple={true}
              onClick={handleDrawerToggle}
              sx={{
                height: {
                  xs: "30px",
                  sm: "48px",
                  md: "48px",
                  lg: "48px",
                },
                color: "#525463",
                p: "0px 0px 0px 12px",
                mr: 0,
                display: { sm: "block", md: "block", lg: "block", xl: "none" },
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <MenuIcon
                sx={{
                  width: {
                    xs: "30px",
                    sm: "48px",
                    md: "48px",
                    lg: "48px",
                  },
                  height: {
                    xs: "30px",
                    sm: "48px",
                    md: "48px",
                    lg: "48px",
                  },
                }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          // onClick={handleDrawerToggle}
          sx={{
            width: { lg: 0, xl: drawerWidth },
            flexShrink: { lg: 0 },
          }}
        >
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "block",
                xl: "none",
              },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#FFFFFF",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
          }}
        >
          <Box
            sx={{
              height: {
                xs: "55px",
                sm: "74px",
                md: "74px",
                lg: "74px",
              },
            }}
          ></Box>
          <Breadcrumb />
        </Box>
      </Box>
    )
  }
}

MainHome.defaultProps = {
  backgroundColor: "white",
  drawerWidth: 240,
  firstList: ["워크스페이스", "사용량"],
  firstListPath: ["workspace", "statistics"],
  secondList: ["로그아웃"],
  firstListIcon: ["RocketLaunch", "Analytics"],
  secondListIcon: ["Logout"],
}
