import * as React from "react"
import Box from "@mui/material/Box"
import Button from "./Button"
import { Modal as MuiModal } from "@mui/material"
import ImageCompare from "./ImageCompare"
import VideoCompare from "./VideoCompare2"
import { HistoryDataProps } from "@components/projectDetail/FileHistory/hooks/HistoryData"
import { getSrBeforeAfter, getSrVideoBeforeAfter } from "@components/api/modules/file"
import { AxiosResponse } from "axios"
import IconButton from "./IconButton"

const style = {
  display: "flex",
  flex: "1 1 0%",
  flexDirection: "column",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "calc(100% - 40px)",
  //   width: "100%",
  height: "calc(100% - 40px)",
  // width: "calc(100vw - 80px)",
  //   height: "calc(100vh - 80px)",
  bgcolor: "background.paper",
  // boxShadow: 24,
  borderRadius: "5px",
  overflow: "overlay",
  backgroundColor: "#ededed",
  //   m: "20px",

  ['@media (max-width:820px)']: {
    height: "calc(80% - 40px)",
  },
  ['@media (max-width:760px)']: {
    height: "calc(65% - 40px)",
  },
}

interface SrBeforeAfterProps {
  before: string
  after: string
  labelType: string
}

interface SrVideoBeforeAfterProps {
  before: string[]
  after: string[]
  original: string[]
}

interface Props {
  historyData: HistoryDataProps[]
  check: number[]
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

export default function Modal(props: Props) {
  const { historyData, check } = props
  const [open, setOpen] = React.useState<boolean>(false)
  const [leftImage, setLeftImage] = React.useState("")
  const [rightImage, setRightImage] = React.useState("")
  const [leftImageLabel, setLeftImageLabel] = React.useState("")
  const [rightImageLabel, setRightImageLabel] = React.useState("")
  const [leftImageList, setLeftImageList] = React.useState<string[]>([])
  const [rightImageList, setRightImageList] = React.useState<string[]>([])
  const [originImageList, setOriginImageList] = React.useState<string[]>([])
  const [fileType, setFileType] = React.useState("")

  const handleOpen = async () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  function SrBeforeAfter(
    data: AxiosResponse<SrBeforeAfterProps>,
    labelType: string
  ) {
    let result = data.data
    let beforeImg,
      afterImg = ""
    beforeImg = result.before
    afterImg = result.after
    setLeftImage(beforeImg)
    setRightImage(afterImg)
    if (labelType === "originSecond") {
      setLeftImageLabel(`${historyData[check[1]].filename}`)
      setRightImageLabel(`${historyData[check[0]].filename}`)
    } else {
      setLeftImageLabel(`${historyData[check[0]].filename}`)
      setRightImageLabel(`${historyData[check[1]].filename}`)
    }
  }

  function SrVideoBeforeAfter(
    data: AxiosResponse<SrVideoBeforeAfterProps>
  ) {
    let result = data.data
    setLeftImageList({ ...result.before })
    setRightImageList({ ...result.after })
    setOriginImageList({ ...result.original })
  }

  async function fetchGetSrBeforeAfter() {
    const originalImageId = historyData[0].id

    if (originalImageId === historyData[check[0]].id) {

      const originalParam = {
        type: "origin",
        before: historyData[check[0]].id,
        after: historyData[check[1]].id,
      }
      const labelType = "originFirst"
      await getSrBeforeAfter(originalParam).then((data) => {
        SrBeforeAfter(data, labelType)
      })

    } else if (originalImageId === historyData[check[1]].id) {

      const originalParam = {
        type: "origin",
        before: historyData[check[1]].id,
        after: historyData[check[0]].id,
      }
      const labelType = "originSecond"
      await getSrBeforeAfter(originalParam).then((data) => {
        SrBeforeAfter(data, labelType)
      })

    } else {

      const params = {
        type: "sr",
        before: historyData[check[0]].id,
        after: historyData[check[1]].id,
      }
      const labelType = "sr"
      await getSrBeforeAfter(params).then((data) => {
        SrBeforeAfter(data, labelType)
      })

    }
  }

  async function fetchGetSrVideoBeforeAfter() {
    const originalImageId = historyData[0].id

    if (originalImageId === historyData[check[0]].id) {

      const originalParam = {
        type: "origin",
        before: historyData[check[0]].id,
        after: historyData[check[1]].id,
      }
      await getSrVideoBeforeAfter(originalParam).then((data) => {
        SrVideoBeforeAfter(data)
      })

    } else if (originalImageId === historyData[check[1]].id) {

      const originalParam = {
        type: "origin",
        before: historyData[check[1]].id,
        after: historyData[check[0]].id,
      }
      await getSrVideoBeforeAfter(originalParam).then((data) => {
        SrVideoBeforeAfter(data)
      })

    } else {

      const params = {
        type: "sr",
        before: historyData[check[0]].id,
        after: historyData[check[1]].id,
      }
      await getSrVideoBeforeAfter(params).then((data) => {
        SrVideoBeforeAfter(data)
      })

    }
  }

  React.useEffect(() => {
    if (historyData.length !== 0) {
      setFileType(historyData[0].type)
    }
    if (check.length === 2) {
      if (fileType === 'image') {
        fetchGetSrBeforeAfter()
      } else {
        fetchGetSrVideoBeforeAfter()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check, historyData])

  React.useEffect(() => {
    if (fileType !== undefined && fileType !== '') {

    } else {
      setOpen(false)
    }
  }, [fileType])

  return (
    <div>
      <Button
        onClick={handleOpen}
        label="비교하기"
        startIcon="Compare"
        size="small"
        color="white"
        iconColor={check.length === 2 ? "#C32632" : "#C4C4C4"}
        borderRadius="16px"
        borderColor="#C32632"
        backgroundColor="white"
        boxShadow="rgb(0 0 0 / 5%) 0px 0px 10px 0px"
        px="0px"
        width="112px"
        hoverWidth="112px"
        hoverHeight="40px"
        disabled={check.length === 2 ? false : true}
      />

      <MuiModal
        open={open}
        onClose={handleClose}
      // sx={{ width: "100vw", height: "100vh" }}
      >
        <Box sx={style}>
          {
            fileType === 'image' ?
              <ImageCompare
                leftImage={leftImage}
                rightImage={rightImage}
                leftImageLabel={leftImageLabel}
                rightImageLabel={rightImageLabel}
                handleClose={handleClose}
              /> :
              <VideoCompare
                leftImageList={leftImageList}
                rightImageList={rightImageList}
                originImageList={originImageList}
                handleClose={handleClose}
              />

          }
        </Box>
      </MuiModal>
    </div>
  )
}
