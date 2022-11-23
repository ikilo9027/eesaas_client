import * as React from "react"
import { CircularProgress as MuiCircularProgress } from "@mui/material"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

interface Props {
  value: number
  width: string
}

function CircularProgressWithLabel(props: Props) {
  const { value, width } = props
  const progressColor = value < 80 ? "#BE2E3C" : "#B0F54D"

  return (
    // <Box sx={{ position: "relative", display: "inline-flex" }}>
    <>
      <MuiCircularProgress
        variant="determinate"
        size="100%"
        sx={{ color: progressColor }}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          fontWeight="bold"
          sx={{
            color: "white",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "14px",
              lg: "14px",
              xl: "14px",
            },
          }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </>
    // </Box>
  )
}

export default function CircularProgress(props: Props) {
  const { value, ...other } = props

  return <CircularProgressWithLabel {...other} value={value} />
}

CircularProgress.defaultProps = {
  value: 0,
  thickness: 6,
  variant: "determinate",
  width: 48,
}
