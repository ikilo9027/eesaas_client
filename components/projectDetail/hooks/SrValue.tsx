import React, { createContext, useContext, useState, useMemo } from "react"

type TypeContextType = {
  type: string
  setType: (t: string) => void
}

type SizeContextType = {
  size: string
  setSize: (s: string) => void
}

type SelectContextType = {
  format: string
  setFormat: (f: string) => void
}

const TypeContext = createContext<TypeContextType>({
  type: "normal",
  setType: () => {},
})
const SizeContext = createContext<SizeContextType>({
  size: "2x",
  setSize: () => {},
})
const SelectContext = createContext<SelectContextType>({
  format: "AUTO",
  setFormat: () => {},
})

interface SrValueProviderProps {
  children: React.ReactNode
}

export function SrValueProvider({ children }: SrValueProviderProps) {
  const [type, setType] = useState<string>("normal")
  const [size, setSize] = useState<string>("2x")
  const [format, setFormat] = useState("AUTO")

  const typeValue = useMemo(() => ({ type, setType }), [type, setType])

  const sizeValue = useMemo(() => ({ size, setSize }), [size, setSize])

  const formatValue = useMemo(
    () => ({ format, setFormat }),
    [format, setFormat]
  )

  return (
    <TypeContext.Provider value={typeValue}>
      <SizeContext.Provider value={sizeValue}>
        <SelectContext.Provider value={formatValue}>
          {children}
        </SelectContext.Provider>
      </SizeContext.Provider>
    </TypeContext.Provider>
  )
}

export const SrTypeValue = () => useContext(TypeContext)
export const SrSizeValue = () => useContext(SizeContext)
export const SrSelectValue = () => useContext(SelectContext)
