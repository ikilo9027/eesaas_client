import React, { createContext, useContext, useState, useMemo } from "react"
import { FileError } from "react-dropzone"

interface FileUploadProviderProps {
  children: React.ReactNode
}

export interface UploadableFile {
  file: File
  errors: FileError[]
  url: string,
  id: number,
  fileId: number
}

type UploadFilesType = {
  files: UploadableFile[]
  setFiles: React.Dispatch<React.SetStateAction<UploadableFile[]>>
}

type UploadProgressContextType = {
  progress: number
  setProgress: (p: number) => void
}

const UploadProgressContext = createContext<UploadProgressContextType>({
  progress: 0,
  setProgress: () => { },
})

const UploadFilesContext = createContext<UploadFilesType>({
  files: [],
  setFiles: () => { },
})

export function FileUploadProvider({ children }: FileUploadProviderProps) {
  const [files, setFiles] = useState<UploadableFile[]>([])
  const [progress, setProgress] = useState<number>(0)
  const filesValue = useMemo(() => ({ files, setFiles }), [files, setFiles])
  const progressValue = useMemo(
    () => ({ progress, setProgress }),
    [progress, setProgress]
  )

  return (
    <UploadProgressContext.Provider value={progressValue}>
      <UploadFilesContext.Provider value={filesValue}>
        {children}
      </UploadFilesContext.Provider>
    </UploadProgressContext.Provider>
  )
}

export const UploadProgressValue = () => useContext(UploadProgressContext)
export const UploadFilesVlue = () => useContext(UploadFilesContext)
