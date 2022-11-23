// @ts-nocheck
import { Grid, Typography } from "@mui/material"
import Box from "@mui/system/Box"
import styled from "@mui/system/styled"
import { useCallback, useContext, useEffect, useState } from "react"
import { FileError, FileRejection, useDropzone } from "react-dropzone"
import { SingleFileUpload } from "./SingleFileUpload"
import { UploadError } from "./UploadError"
import Icon from "@components/common/Icon"
import { UploadFilesVlue } from "@components/project/ImageCard/hooks/FileUpload"
// import { UploadContext } from "../../pages/components/ImageList"
// import { UploadContext } from "../porject/ImageCard/ImageCard"

interface DropzoneProps {
  isDragAccept: boolean
  isDragReject: boolean
}

const borderColor = (props: DropzoneProps) => {
  if (props.isDragReject) {
    return "#C32632"
  }
  return "#AEB7C2"
}

const backgroundColor = (props: DropzoneProps) => {
  if (props.isDragAccept) {
    return "#F3F3F3"
  }
  if (props.isDragReject) {
    return "#C32632"
  }
  return "white"
}

const DropzoneBox = styled(Box)<DropzoneProps>((props) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: borderColor(props),
  borderStyle: "dashed",
  backgroundColor: backgroundColor(props),
  width: "100%",
  height: "100%",
  transition: "border 0.24s ease-in-out",
  cursor: "pointer",
}))

export const StorageDropzoneBox = styled(Box)((props) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: "2px",
  borderRadius: "2px",
  borderColor: "red",
  borderStyle: "dashed",
  backgroundColor: backgroundColor(props),
  width: "100%",
  height: "100%",
  transition: "border 0.24s ease-in-out",
}))

export interface UploadableFile {
  file: File
  errors: FileError[]
  url?: string
  id: number
}

interface Props {
  onSelect: () => void
}

export function MultipleFileUpload(props: Props) {
  const { onSelect } = props
  const [boxDrag, setBoxDrag] = useState(false)
  const [boxHover, setBoxHover] = useState(false)
  const { files, setFiles } = UploadFilesVlue()

  useEffect(() => {
    console.log('AAAA@@@', files)
  }, [files])


  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }))
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('$$$$$$', mappedAcc)
  }, [])

  function onUpload(file: File, data: Object) {
    setFiles((curr) =>
      curr.map((fw, id) => {
        let url = data.signedUrl
        let fileId = data.teamid
        if (fw.file === file) {
          return { ...fw, url, id, fileId }
        }
        return { ...fw, id }
      })
    )
    onSelect()
  }
  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file))
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
    },
    maxSize: 30000000000, // 30GB
  })

  useEffect(() => {
    setBoxDrag(isDragAccept)
  }, [isDragAccept])

  return (
    <>
      <DropzoneBox
        {...getRootProps({ isDragAccept, isDragReject })}
        onMouseOver={() => setBoxHover(true)}
        onMouseOut={() => setBoxHover(false)}
      >
        <Icon
          icon="CloudUpload"
          iconColor={boxDrag || boxHover ? "#C32632" : "#AEB7C2"}
        />
        <input {...getInputProps()} />
        <Box
          color={isDragAccept || boxHover ? "black" : "#4e5a68"}
          sx={{ py: "16px" }}
        >
          {isDragAccept && <Typography>업로드 가능한 파일입니다.</Typography>}
          {isDragReject && (
            <Typography sx={{ color: "black" }}>
              업로드 불가능한 파일입니다.
            </Typography>
          )}
          {!isDragActive && (
            <Typography>
              여러개의 파일을 마우스로 끌어놓으세요 또는 클릭하여 파일을 업로드
              하세요
            </Typography>
          )}
        </Box>
      </DropzoneBox>
      {files &&
        files.map((fileWrapper, idx) => (
          <Grid item key={idx}>
            {fileWrapper.errors.length ? (
              <UploadError
                file={fileWrapper.file}
                errors={fileWrapper.errors}
                onDelete={onDelete}
              />
            ) : (
              <SingleFileUpload
                key={idx}
                onUpload={onUpload}
                onDelete={onDelete}
                file={fileWrapper.file}
              />
            )}
          </Grid>
        ))}
    </>
  )
}
