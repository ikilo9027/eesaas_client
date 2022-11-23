import React, { createContext, useContext, useState, useMemo } from "react"

interface StaticsProviderProps {
  children: React.ReactNode
}

export interface StaticsDataProps {
  buyTime: string
  id: number
  paymentAmount: number
  paymentNameList: string
  refundPurchase: string
  userId: string
}

type StaticsDataValueType = {
  staticsData: StaticsDataProps[]
  setStaticsValue: React.Dispatch<React.SetStateAction<StaticsDataProps[]>>
}

const StaticsDataContext = createContext<StaticsDataValueType>({
  staticsData: [],
  setStaticsValue: () => { },
})

export function StaticsDataProvider({ children }: StaticsProviderProps) {
  const [staticsData, setStaticsValue] = useState<StaticsDataProps[]>([])

  const staticsValue = useMemo(
    () => ({ staticsData, setStaticsValue }),
    [staticsData, setStaticsValue]
  )

  return (
    <StaticsDataContext.Provider value={staticsValue}>
      {children}
    </StaticsDataContext.Provider>
  )
}

export const StaticsDataValue = () => useContext(StaticsDataContext)