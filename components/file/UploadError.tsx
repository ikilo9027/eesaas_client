import { Typography } from "@mui/material"
import LinearProgress from "@mui/material/LinearProgress"
import { FileError } from "react-dropzone"
import { FileHeader } from "./FileHeader"

export interface UploadErrorProps {
  file: File
  onDelete: (file: File) => void
  errors: FileError[]
}

export function UploadError({ file, onDelete, errors }: UploadErrorProps) {
  return (
    // <>
    //   <FileHeader file={file} onDelete={onDelete} />
    //   <LinearProgress variant="determinate" color="error" value={100} />
    //   {errors.map((error, index) => (
    //     <div key={index}>
    //       <Typography color="error">{error.message}</Typography>
    //     </div>
    //   ))}
    // </>
    <></>
  )
}
