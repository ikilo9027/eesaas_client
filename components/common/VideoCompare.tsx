import { SetStateAction, useEffect, useState } from "react"
import Box from "@mui/material/Box"
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { height, styled } from "@mui/system"
import Icon from "./Icon"
import ImgZoom from "./ImgZoom"
import ImgSlider from "./ImgSlider"
import { DialogTitle } from "@mui/material"
import IconButton from "./IconButton"
import ReactCompareImage from 'react-compare-image';
import { CatchingPokemonSharp } from "@mui/icons-material"
import VideoSlider from "./VideoSlider"

interface Props {
  // leftImage: string
  // rightImage: string
  // leftImageLabel: string
  // rightImageLabel: string
  leftImageList: string[]
  rightImageList: string[]
  originImageList: string[]
  handleClose: () => void
}

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

const CompareButton = styled(ToggleButton)({
  borderRadius: 0,
})

export default function VideoCompare(props: Props) {
  const { handleClose, leftImageList, rightImageList, originImageList } = props
  const [isHide, setIsHide] = useState<boolean>(false)
  const [isUpdown, setIsUpdown] = useState<boolean>(false)
  const [rowIndex, setRowIndex] = useState<number>(0)
  const [leftImage, setLeftImage] = useState<string>(leftImageList[0])
  const [rightImage, setRightImage] = useState<string>(rightImageList[0])
  const [alignment, setAlignment] = useState<string | null>("center")

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
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
        {/* <ButtonGroup
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
        </ButtonGroup> */}
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
          <VideoSlider {...props} />
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
          {/* <VideoSlider zoom={zoomList[zoom]} {...props} /> */}
        </Box>
      )}
    </>
  )
}
