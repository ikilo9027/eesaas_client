import { useState } from "react"
import Box from "@mui/material/Box"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { styled } from "@mui/system"
import Icon from "./Icon"
import ImgZoom from "./ImgZoom"
import ImgSlider from "./ImgSlider"
import { DialogTitle } from "@mui/material"
import IconButton from "./IconButton"
import ImgFit from "./ImgFit"

interface Props {
  leftImage: string
  rightImage: string
  leftImageLabel: string
  rightImageLabel: string
  handleClose: () => void
}

const ZoomButton = styled(Button)({
  color: "#848484",
  borderColor: "#DBDBDB",
  borderRadius: 0,
  maxWidth: "36px",
  minWidth: "36px",
  "& .MuiButton-startIcon": {
    margin: 0,
  },
  "&:hover": {
    borderColor: "#DBDBDB",
  },
})

const CompareButton = styled(ToggleButton)({
  borderRadius: 0,
})

export interface DialogTitleProps {
  children?: React.ReactNode
  onClose: () => void
}

const ImageCompareTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <IconButton
      icon="Close"
      iconColor="black"
      onClick={onClose}
      sx={{
        position: "absolute",
        left: "0px",
        top: "4px",
        "&:hover": {
          backgroundColor: "white",
        },
      }}
    />
  )
}

const zoomList = ["200", "300", "400", "500"]

export default function ImageCompare(props: Props) {
  const { handleClose } = props
  const [alignment, setAlignment] = useState<string | null>("center")
  const [zoom, setZoom] = useState<number>(0)

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  const zoomIn = () => {
    if (zoom < zoomList.length - 1) {
      setZoom(zoom + 1)
    }
  }

  const zoomOut = () => {
    if (zoom > 0) {
      setZoom(zoom - 1)
    }
  }

  return (
    <>
      <ImageCompareTitle onClose={handleClose} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{ color: "white" }}
        >
          {/* <CompareButton value="left">
            <Icon icon="FitScreen" />
          </CompareButton> */}
          <CompareButton value="center">
            <Icon icon="Compare" />
          </CompareButton>
          <CompareButton value="right">
            <Icon icon="ZoomIn" />
          </CompareButton>
        </ToggleButtonGroup>
        <ButtonGroup
          sx={{
            borderColor: "#DBDBDB",
          }}
        >
          <ZoomButton
            variant="outlined"
            onClick={zoomIn}
            startIcon={<Icon icon="Add" />}
            disabled={alignment === "right" ? false : true}
          />
          <ZoomButton
            disabled
            variant="outlined"
            sx={{
              maxWidth: "50px",
              minWidth: "50px",
            }}
          >
            {zoomList[zoom]}%
          </ZoomButton>
          <ZoomButton
            variant="outlined"
            onClick={zoomOut}
            startIcon={<Icon icon="Remove" />}
            disabled={alignment === "right" ? false : true}
          />
        </ButtonGroup>
      </Box>

      {/* {alignment === "left" && (
        <Box
          sx={{
            display: "flex",
            flex: "1 1 0%",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#ededed",
          }}
        >
          <ImgFit {...props} />
        </Box>
      )} */}
      {alignment === "center" && (
        <Box
          sx={{
            display: "flex",
            flex: "1 1 0%",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#ededed",
            // '@media (max-width: 800px)': {
            //   border: '1px solid blue',
            // }
          }}
        >
          <ImgSlider {...props} />
        </Box>
      )}
      {alignment === "right" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <ImgZoom zoom={zoomList[zoom]} {...props} />
        </Box>
      )}
    </>
  )
}
