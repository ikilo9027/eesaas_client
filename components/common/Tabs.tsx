import * as React from "react"
import { Tabs as MuiTabs } from "@mui/material"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Icon from "./Icon"

interface Props {
  value: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  allowScrollButtonsMobile: boolean
  centered: boolean
  indicatorColor: string
  scrollButtons: "auto" | false | true
  selectionFollowsFocus?: boolean
  variant: "fullWidth" | "scrollable" | "standard"
  visibleScrollbar: boolean
  iconPosition: "top" | "start" | "end" | "bottom"
  icons: readonly string[]
  labels: readonly string[]
  width: number | string
  height: number
}

export default function Tabs(props: Props): JSX.Element {
  const {
    value,
    handleChange,
    labels,
    icons,
    width,
    height,
    iconPosition,
    indicatorColor,
    ...other
  } = props

  const items = icons.length > labels.length ? icons : labels

  return (
    <Box sx={{ display: "flex", justifyContent: "center", borderBottom: 0 }}>
      <MuiTabs
        value={value}
        onChange={handleChange}
        {...other}
        sx={{
          minHeight: "40px",
          borderBottom: "0px",
          "& .MuiTabs-indicator": {
            backgroundColor: indicatorColor,
          },
        }}
      >
        {items.map(
          (item, index) =>
            (labels[index] !== undefined || icons[index] !== undefined) && (
              <Tab
                key={item}
                value={index}
                label={labels[index]}
                iconPosition={iconPosition}
                icon={<Icon icon={icons[index] || ""} />}
                disableRipple={true}
                sx={{
                  color: "#4E5A68",
                  minHeight: 0,
                  p: "0px 24px 0px 24px",
                  "&.Mui-selected": {
                    color: "#C32632",
                  },
                }}
              />
            )
        )}
      </MuiTabs>
    </Box>
  )
}

Tabs.defaultProps = {
  allowScrollButtonsMobile: false,
  centered: false,
  iconPosition: "start" as "start",
  indicatorColor: "#C32632",
  scrollButtons: "auto" as "auto",
  variant: "standard" as "standard",
  visibleScrollbar: false,
  icons: ["Tune", "Settings", "ContentCut"],
  labels: ["옵션", "설정", "자르기"],
  width: 500,
  height: 64,
}
