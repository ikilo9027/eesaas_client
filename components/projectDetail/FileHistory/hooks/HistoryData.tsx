import React, { createContext, useContext, useState, useMemo } from "react"

interface HistoryDataProviderProps {
  children: React.ReactNode
}

interface Type {
  type: string
}

export interface HistoryDataProps {
  FPS: number
  bitrate: number
  codec: string
  date: string
  duration: string
  filename: string
  format: string
  height: number
  signedUrl: string
  size: number
  type: string
  width: number
  id: number,
  srStatus: string
}

type HistoryDataType = {
  historyData: HistoryDataProps[]
  setHistoryData: React.Dispatch<React.SetStateAction<HistoryDataProps[]>>
}

const HistoryDataContext = createContext<HistoryDataType>({
  historyData: [],
  setHistoryData: () => { },
})

export function HistoryDataProvider({ children }: HistoryDataProviderProps) {
  const [historyData, setHistoryData] = useState<HistoryDataProps[]>([])

  const HistoryDataValue = useMemo(
    () => ({ historyData, setHistoryData }),
    [historyData, setHistoryData]
  )

  return (
    <HistoryDataContext.Provider value={HistoryDataValue}>
      {children}
    </HistoryDataContext.Provider>
  )
}

export const HistoryDataValue = () => useContext(HistoryDataContext)
