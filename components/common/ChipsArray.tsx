import * as React from "react"
import { styled } from "@mui/material/styles"
import Chip from "@mui/material/Chip"
import Paper from "@mui/material/Paper"
// import Icon from "./Icon"

interface chipDataProps {
  type: string
}

interface Props {
  // chipData: Array<chipDataProps>
  // status: "ready" | "processing" | "processed"
  status: string
}

interface StatusKoProps {
  [key: string]: string
}

const statusKo: StatusKoProps = {
  ready: "변환 준비중",
  processing: "변환 중",
  processed: "변환 완료",
}

const ListItem = styled("li")(({ theme }) => ({
  // margin: "12px 16px 16px 0",
}))

export default function ChipsArray(props: Props) {
  const { status } = props
  const [chipBgColor, setChipBgColor] = React.useState<string>("#F3F3F3")
  const [chipTextColor, setChipTextColor] = React.useState<string>("#4E5A68")

  React.useEffect(() => {
    switch (status) {
      case "ready":
        setChipBgColor("#F3F3F3")
        setChipTextColor("#4E5A68")
        break
      case "processing":
        setChipBgColor("#5bc3ff1f")
        setChipTextColor("#007fe9ad")
        break
      case "processed":
        setChipBgColor("#a8fc661f")
        setChipTextColor("#00d757ad")
        break
      default:
        setChipBgColor("#F3F3F3")
        setChipTextColor("#4E5A68")
    }
  }, [status])

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        bgcolor: "white",
        pl: 0,
        pb: "4px",
        m: 0,
        height: 42,
      }}
      component="ul"
    >
      <Chip
        label={statusKo[status]}
        sx={{
          bgcolor: chipBgColor,
          "& .MuiChip-label": {
            color: chipTextColor,
          },
        }}
      />
      {/* {chipData.map((data, index) => {
        return (
          <ListItem key={index}>
            <Chip
              label={data.type}
              sx={{
                bgcolor: "#F7F7F7",
                "& .MuiChip-label": {
                  color: "#0D0D0D",
                },
              }}
            />
          </ListItem>
        )
      })} */}
    </Paper>
  )
}

const typeData = [{ type: "원본" }]

ChipsArray.defaultProps = { chipData: typeData }
