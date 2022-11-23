import * as React from "react"
import FormControl from "@mui/material/FormControl"
import MenuItem from "@mui/material/MenuItem"
import { Select as MuiSelect } from "@mui/material"
import InputBase from "@mui/material/InputBase"
import { styled } from "@mui/material/styles"

const BootstrapInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#F3F3F3",
    border: "1px solid #ced4da",
    fontSize: 14,
    fontWeight: 600,
    color: "#4E5A68",
    padding: "10px 26px 10px 12px",
    "&:focus": {
      borderRadius: 4,
    },
  },
}))

interface Props {
  menuItemData: string[]
  data: string
  setData: React.Dispatch<React.SetStateAction<string>>
}

export default function Select(props: Props) {
  const { menuItemData, data, setData } = props

  const handleChange = React.useCallback(
    (event: { target: { value: string } }) => {
      setData(event.target.value)
    },
    [setData]
  )

  return (
    <FormControl
      size="small"
      fullWidth={true}
      sx={{
        mb: "20px",
      }}
    >
      <MuiSelect
        id="select"
        value={data}
        onChange={handleChange}
        input={<BootstrapInput />}
        fullWidth={true}
        sx={{
          height: "40px",
        }}
      >
        {menuItemData.map((data, item) => (
          <MenuItem key={item} value={data}>
            {data}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}
