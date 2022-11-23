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
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <MuiCircularProgress
        variant="determinate"
        size={width}
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
          sx={{ color: "white" }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default function CircularProgress(props: Props) {
  const { value, ...other } = props
  // const [progress, setProgress] = React.useState(0)

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 1
  //     )
  //   }, 300)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  return <CircularProgressWithLabel {...other} value={value} />
}

CircularProgress.defaultProps = {
  value: 0,
  thickness: 4,
  variant: "determinate",
  width: 48,
}
