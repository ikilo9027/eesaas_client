import { SrProgress } from "@components/projectDetail/hooks/SrProgress"
import { LinearProgress } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useEffect, useState, useContext } from "react"
import { FileHeader } from "./FileHeader"
import axios from "axios"
import { useRouter } from "next/router"

export interface SingleFileUploadProps {
  file: File
  onDelete: (file: File) => void
  onUpload: (file: File, url: string) => void
}

export function SingleFileUpload({
  file,
  onDelete,
  onUpload,
}: SingleFileUploadProps) {
  const { srProgress, setSrProgress } = SrProgress()
  const router = useRouter()
  let queries = router.query

  async function fetchUploadFile(file: File, project: string) {
    const config = {
      onUploadProgress: (progressEvent: { loaded: number; total: number }) => {
        // if (
        //   Math.floor((progressEvent.loaded * 100) / progressEvent.total) === 100
        // )
        // setSrProgress(
        //   Math.floor((progressEvent.loaded * 100) / progressEvent.total)
        // )
      },
    }

    let userId = sessionStorage.getItem("userId")
    let formdata = new FormData()
    formdata.append("workspaceId", project)
    formdata.append("userId", userId as string)
    formdata.append("file", file)
    setSrProgress("uploading")

    axios
      // .post("http://192.168.0.21:3000/workspaceboards", formdata, config)
      .post(`${process.env.NEXT_PUBLIC_URL}/workspaceboards`, formdata, config)
      .then((data) => {
        console.log("data.data--->", data.data, srProgress)
        setTimeout(() => {
          onUpload(file, data.data)
        }, 1000)
        setSrProgress("upload")
      })
  }

  useEffect(() => {
    if (typeof queries.project === "string") {
      let project = queries.project
      console.log(project)
      fetchUploadFile(file, project)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}
