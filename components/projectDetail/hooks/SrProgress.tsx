import React, { createContext, useContext, useState } from "react"

interface SrProgressProviderProps {
  children: React.ReactNode
}

type SrIdContextType = {
  srId: string
  setSrId: (s: string) => void
}

const SrIdContext = createContext<SrIdContextType>({
  srId: '',
  setSrId: () => { },
})

type SrProgressContextType = {
  srProgress: string
  setSrProgress: (p: string) => void
}

const SrProgressContext = createContext<SrProgressContextType>({
  srProgress: 'ready',
  setSrProgress: () => { },
})

export function SrProgressProvider({ children }: SrProgressProviderProps) {
  const [srProgress, setSrProgress] = useState('ready')
  const [srId, setSrId] = useState('')

  const progressValue = React.useMemo(
    () => ({ srProgress, setSrProgress }),
    [srProgress, setSrProgress]
  )

  const srIdValue = React.useMemo(
    () => ({ srId, setSrId }),
    [srId, setSrId]
  )


  return (
    <SrProgressContext.Provider value={progressValue}>
      <SrIdContext.Provider value={srIdValue}>
        {children}
      </SrIdContext.Provider>
    </SrProgressContext.Provider>
  )
}

export const SrProgress = () => useContext(SrProgressContext)
export const SrId = () => useContext(SrIdContext)

