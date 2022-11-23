import * as React from "react"
import { ToggleButton as MuiToggleButton } from "@mui/material"
import Box from "@mui/material/Box"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { styled } from "@mui/material/styles"

interface Props {
  toggleButtonData: Array<ToggleButtonData>
}

interface ToggleButtonData {
  value: string
}

const CustomToggleButton = styled(MuiToggleButton)({
  color: "#4E5A68",
  fontWeight: 600,
  backgroundColor: "#F3F3F3",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#C32632",
  },
  "&:hover": {
    color: "white",
    backgroundColor: "#F3F3F3",
  },
})

export default function ToggleButton(props: Props) {
  const { toggleButtonData } = props

  const handleChange = React.useCallback(
    (event: React.MouseEvent<HTMLElement>, nextView: string) => {},
    []
  )

  return (
    <Box sx={{ pb: 2 }}>
      <ToggleButtonGroup
        value={[]}
        exclusive
        onChange={handleChange}
        fullWidth
        sx={{ height: 40 }}
      >
        {toggleButtonData.map((item) => (
          <CustomToggleButton
            key={item.value}
            value={item.value}
            // fullWidth
            // sx={{ border: 0, borderRadius: 0 }}
          >
            {item.value}
            {/* <Icon icon={item.value} /> */}
          </CustomToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  )
}
