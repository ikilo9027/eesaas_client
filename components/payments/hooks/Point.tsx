import React, { createContext, useContext, useState, useMemo } from "react"

interface PointProviderProps {
  children: React.ReactNode
}

type PointValueType = {
  pointValue: number
  setPointValue: React.Dispatch<React.SetStateAction<number>>
}

export const PointContext = createContext<PointValueType>({
  pointValue: 0,
  setPointValue: () => {},
})

export function PointValueProvider({ children }: PointProviderProps) {
  const [pointValue, setPointValue] = useState(0)

  const pointValueMemo = useMemo(
    () => ({ pointValue, setPointValue }),
    [pointValue, setPointValue]
  )

  return (
    <PointContext.Provider value={pointValueMemo}>
      {children}
    </PointContext.Provider>
  )
}

export const PointContextValue = () => useContext(PointContext)
