import Box from "@mui/material/Box"
import { FileCard } from "./FileCard"
import { FileInfo } from "./FileInfo"
import { FileSR } from "./FileSR"
import { FileHistory } from "./FileHistory"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getDetailFile, getSrHistroy, getSegmentationList } from "@components/api/modules/file"
import { HistoryDataValue } from "./FileHistory/hooks/HistoryData"
import {
  ProjectDetailContainer,
  ProjectDetailBox,
  FileCardBox,
  FileInfoSrBox,
  FileHistoryBox,
} from "./styles"
import { SrProgress } from "./hooks/SrProgress"
import { PointValueProvider } from "@components/payments/hooks/Point"

export default function ProjectDetail() {
  const router = useRouter()
  const queries = router.query
  const [fileInfo, setFileInfo] = useState(Object)
  const [fileCardData, setFileCardData] = useState(Object)
  const [fileInfodData, setFileInfodData] = useState(Object)
  const [fileType, setFileType] = useState("")
  const { historyData, setHistoryData } = HistoryDataValue()
  const { srProgress } = SrProgress()
  const [progressCount, setProgressCount] = useState(0)
  const [segmentationList, setSegmentationList] = useState<string[]>([])

  function formatFileSize(x: number) {
    if (x === 0) {
      return 0
    } else {
      var s = ["bytes", "KB", "MB", "GB", "TB", "PB"]
      var e = Math.floor(Math.log(x) / Math.log(1024))
      return (x / Math.pow(1024, e)).toFixed(2) + " " + s[e]
    }
  }

  async function fetchGetDetailFile() {
    let params = {
      fileId: queries.fileId,
    }
    await getDetailFile(params).then((data) => {
      setFileInfo(data.data)
      setFileType(data.data.fileInfo.type)
    })
  }

  async function fetchGetSrHistory() {
    let setData: any = []
    let originData = {
      FPS: fileInfo.fileInfo.FPS ? fileInfo.fileInfo.FPS : "",
      bitrate: fileInfo.fileInfo.bitrate ? fileInfo.fileInfo.bitrate : "",
      codec: fileInfo.fileInfo.codec ? fileInfo.fileInfo.codec : "",
      date: fileInfo.fileInfo.time,
      duration: fileInfo.fileInfo.duration ? fileInfo.fileInfo.duration : "",
      filename: fileInfo.fileInfo.fileName,
      format: fileInfo.fileInfo.format,
      height: fileInfo.fileInfo.height,
      signedUrl: fileInfo.signedUrl,
      size: fileInfo.fileInfo.size,
      type: fileInfo.fileInfo.type,
      width: fileInfo.fileInfo.width,
      id: fileInfo.fileInfo.id,
    }

    setData.push(originData)

    let params = {
      fileId: queries.fileId,
    }

    await getSrHistroy(params).then((data) => {
      data.data.forEach((history: any) => {
        setData.push(history)
      })
      setHistoryData(setData)

      let process = data.data.filter(
        (history: any) => history.srStatus === "processing"
      )
      if (process.length > 0) {
        // 프로그래스 on / off
        setProgressCount(progressCount + 1)
      } else {
        setProgressCount(0)
      }
    })
  }
  async function fetchGetSegmentationList() {
    console.log('fileInfo-------', fileInfo.fileInfo.duration)
    let requestBody = {
      filename: fileInfo.fileInfo.localFilename
    }
    await getSegmentationList(requestBody).then((data) => {
      setSegmentationList(data.data.file_list)
    })
  }

  useEffect(() => {
    if (progressCount === 0) {
      return
    }

    const progress = setTimeout(() => {
      fetchGetSrHistory()
    }, 5000)

    return () => clearTimeout(progress)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressCount])

  useEffect(() => {
    if (fileInfo.fileInfo) {
      let formatType = ""
      if (fileInfo.fileInfo.type === "image") {
        formatType = "img"
        setFileInfodData({
          fileName: fileInfo.fileInfo.fileName,
          format: fileInfo.fileInfo.format,
          size: formatFileSize(fileInfo.fileInfo.size * 1000000),
          resolution: `${fileInfo.fileInfo.width} x ${fileInfo.fileInfo.height}`,
        })
      } else {
        formatType = fileInfo.fileInfo.type
        setFileInfodData({
          fileName: fileInfo.fileInfo.fileName,
          format: fileInfo.fileInfo.format,
          size: formatFileSize(fileInfo.fileInfo.size * 1000000),
          resolution: `${fileInfo.fileInfo.width} x ${fileInfo.fileInfo.height}`,
          time: fileInfo.fileInfo.time,
          bitrate: fileInfo.fileInfo.bitrate,
          codec: fileInfo.fileInfo.codec,
          fps: fileInfo.fileInfo.FPS,
        })
      }
      setFileCardData({
        type: formatType,
        url:
          formatType === "img" ? fileInfo.signedUrl : fileInfo.videosignedUrl,
        duration: fileInfo.fileInfo.duration
      })
      fetchGetSrHistory()
      // fetchGetSegmentationList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileInfo])

  useEffect(() => {
    if (queries.project !== undefined) {
      fetchGetDetailFile()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries])

  useEffect(() => {
    if (fileInfo.signedUrl !== undefined) {
      fetchGetSrHistory()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srProgress])

  return (
    <ProjectDetailContainer maxWidth={false} disableGutters={true}>
      <ProjectDetailBox>
        <FileCardBox component="main">
          {fileCardData.type && <FileCard fileCardData={fileCardData} />}
        </FileCardBox>
        <FileInfoSrBox>
          <FileInfo fileType={fileType} fileInfoData={fileInfodData} />
          <PointValueProvider>
            <FileSR fileType={fileType} getSrHistory={fetchGetSrHistory} fileCardData={fileCardData} segmentationList={segmentationList} />
          </PointValueProvider>
        </FileInfoSrBox>
        <FileHistoryBox>
          <Box>
            <FileHistory />
          </Box>
        </FileHistoryBox>
      </ProjectDetailBox>
    </ProjectDetailContainer>
  )
}
