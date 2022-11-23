import React, { createContext, useContext, useState, useMemo } from "react"

interface StorageProviderProps {
  children: React.ReactNode
}

type StorageValueType = {
  storageValue: string
  setStorageValue: React.Dispatch<React.SetStateAction<string>>
}

const StorageContext = createContext<StorageValueType>({
  storageValue: "0",
  setStorageValue: () => {},
})

export function StorageValueProvider({ children }: StorageProviderProps) {
  const [storageValue, setStorageValue] = useState("0")

  const storageValueMemo = useMemo(
    () => ({ storageValue, setStorageValue }),
    [storageValue, setStorageValue]
  )

  return (
    <StorageContext.Provider value={storageValueMemo}>
      {children}
    </StorageContext.Provider>
  )
}

export const StorageContextValue = () => useContext(StorageContext)
