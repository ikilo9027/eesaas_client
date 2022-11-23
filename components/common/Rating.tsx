import * as React from "react"
import { Rating as MuiRating } from "@mui/material"
import Stack from "@mui/material/Stack"
// import { styled } from '@mui/material/styles'
import Icon from "./Icon"

interface ModelContextType {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
}

// const StyledRating = styled(MuiRating)({
//   "& .MuiRating-iconFilled": {
//     color: "#C32632",
//   },
//   "& .MuiRating-iconHover": {
//     color: "#C32632",
//   },
// })

export default function Rating({ scoreValue }: any) {
  const [value, setValue] = React.useState<number | null>(0)

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      fontSize="3rem"
    >
      <MuiRating
        defaultValue={0}
        value={value}
        precision={0.5}
        // icon={<Icon icon="StarRate" />}
        // emptyIcon={<Icon icon="StarRate" />}
        onChange={(
          event: React.SyntheticEvent<Element, Event>,
          newValue: number | null
        ) => {
          setValue(newValue)
          scoreValue(newValue)
        }}
        sx={{ fontSize: "3rem", color: "#C32632" }}
      />
    </Stack>
  )
}
