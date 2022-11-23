import * as React from "react"
import Image from "next/image"
import Link from "@/Link"
import Button from "@components/common/Button"
import { AppBar as MuiAppBar, Button as MuiButton, Drawer } from "@mui/material"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import CssBaseline from "@mui/material/CssBaseline"
import MenuIcon from "@mui/icons-material/Menu"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

interface Props {
  position: "absolute" | "fixed" | "relative" | "static" | "sticky"
  color: "inherit" | "primary" | "secondary"
  logoColor: string
  textColor: "inherit" | "primary" | "secondary"
  title?: string
  leftIcon?: string
  actionList: string[]
  actionListHref: string[]
}

interface ElevationScroll {
  position: "absolute" | "fixed" | "relative" | "static" | "sticky"
  color: "inherit" | "primary" | "secondary"
  logoColor: string
  textColor: "inherit" | "primary" | "secondary"
  window?: () => Window
  children: React.ReactElement
}

const pages = ["가격 정책", "회사 소개"]
const pagesLink = ["/", "http://espresomedia.com"]
const pagesClick = (index: number) => {
  location.href = pagesLink[index]
}

const toggleDrawer = (
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setState(!state)
}

const listClick = (index: number, actionListHref: string[]) => {
  location.href = actionListHref[index]
}

const list = (
  actionList: string[],
  actionListHref: string[],
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => (
  <Box sx={{ width: "auto" }} onClick={() => toggleDrawer(state, setState)}>
    <List>
      {pages.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => pagesClick(index)}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {actionList.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => listClick(index, actionListHref)}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)

function ElevationScroll(props: ElevationScroll) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "#B73A3C" : "transparent",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      // padding: "10px 0px",
    },
  })
}

export default function MainPageAppBar(props: Props): JSX.Element {
  const { position, color, textColor, actionList, actionListHref } = props
  const [state, setState] = React.useState(false)

  return (
    <>
      <CssBaseline />
      {/* <ElevationScroll
        position={"fixed"}
        color={"inherit"}
        logoColor={""}
        textColor={"inherit"}
      > */}
      <MuiAppBar color={color} position={position} elevation={0}>
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link href="/">
              <Box sx={{ display: "flex", alignItems: "center", mr: "44px" }}>
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
                    src="/favicon.png"
                    alt="Image"
                    width={33}
                    height={35}
                  />
                </Box>
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

            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <IconButton
                size="large"
                disableRipple={true}
                onClick={() => toggleDrawer(state, setState)}
                // color="inherit"
                sx={{
                  width: "40px",
                  height: "48px",
                  color: "#C32632",
                }}
              >
                <MenuIcon sx={{ width: "40px", height: "48px" }} />
              </IconButton>
              <Drawer
                anchor={"top"}
                open={state}
                onClose={() => toggleDrawer(state, setState)}
              >
                {list(actionList, actionListHref, state, setState)}
              </Drawer>
              {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            >
              {pages.map((page, index) => (
                <MuiButton
                  key={page}
                  onClick={() => pagesClick(index)}
                  color={textColor}
                  sx={{
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#C32632",
                    },
                  }}
                >
                  {page}
                </MuiButton>
              ))}
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                  xl: "flex",
                },
                flexGrow: 0,
              }}
            >
              <MuiButton
                color={textColor}
                href={actionListHref[0]}
                sx={{
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "white", color: "#C32632" },
                }}
              >
                회원가입
              </MuiButton>
              <Button
                href={actionListHref[1]}
                label="시작하기"
                width="130px"
                height="44px"
                borderRadius="25px"
                margin="0px 20px 0px 20px"
              />
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
      {/* </ElevationScroll> */}
    </>
  )
}

// Set default properties
MainPageAppBar.defaultProps = {
  position: "fixed",
  color: "inherit",
  textColor: "inherit",
  leftIcon: "menu",
  title: "EESaaS",
  actionList: ["회원가입", "시작하기"],
  actionListHref: ["/auth/signup", "/workspace"],
}
