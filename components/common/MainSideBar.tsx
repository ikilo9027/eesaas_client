import { useState } from "react"
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
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { styled } from "@mui/material/styles"
import Icon from "./Icon"

interface Props {
  titleImage: string
  backgroundColor: string
  drawerWidth: number
  firstList: readonly string[]
  secondList: readonly string[]
  firstListIcon: readonly string[]
  secondListIcon: readonly string[]
  accountMenuItem: string[]
  data?: any
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

export default function MainSideBar(props: Props) {
  const {
    titleImage,
    backgroundColor,
    drawerWidth,
    firstList,
    secondList,
    firstListIcon,
    secondListIcon,
    accountMenuItem,
    data,
  } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index)
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const drawer = (
    <Box>
      <Toolbar />
      {/* <Divider /> */}
      <StyledList>
        {firstList.map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
          >
            <ListItemIcon>
              <Icon icon={firstListIcon[index]} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </StyledList>
      <Divider />
      <StyledList>
        {secondList.map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedIndex === index + 1}
            onClick={() => handleListItemClick(index + 1)}
          >
            <ListItemIcon>
              <Icon icon={secondListIcon[index]} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </StyledList>
    </Box>
  )

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
          width: { sm: "100%", md: "100%" },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            size="large"
            onClick={handleDrawerToggle}
            sx={{
              color: "#5E5E5E",
              mr: 2,
              display: { sm: "block", md: "block", lg: "none" },
            }}
          >
            <Icon icon="menu" />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
              },
            }}
          >
            <Image src={titleImage} alt="Image" width="51" height="51" />
            <Image
              src="/espresomedia_name.png"
              alt="Image"
              width="130"
              height="51"
            />
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "none",
              },
            }}
          >
            <Image src={titleImage} alt="Image" width="51" height="51" />
            <Image
              src="/espresomedia_name.png"
              alt="Image"
              width="130"
              height="51"
            />
          </Box>
          <IconButton
            edge="end"
            size="large"
            onClick={handleMenu}
            sx={{
              ml: 2,
              color: "white",
            }}
          >
            <Icon icon="accountCircle" theme="Filled" iconColor="#C32632" />
          </IconButton>
          <Menu
            sx={{ mt: "49px", ml: "10px" }}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {accountMenuItem.map((setting) => (
              <MenuItem key={setting} onClick={handleClose}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { lg: drawerWidth },
          flexShrink: { lg: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
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
              lg: "block",
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {data}
      </Box>
    </Box>
  )
}

MainSideBar.defaultProps = {
  titleImage: "/favicon.png",
  backgroundColor: "white",
  drawerWidth: 240,
  firstList: ["워크스페이스"],
  secondList: ["설정"],
  firstListIcon: ["RocketLaunch"],
  secondListIcon: ["Settings"],
  accountMenuItem: ["Logout"],
}
