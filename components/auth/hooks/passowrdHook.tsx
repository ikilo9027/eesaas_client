import React, { createContext, useContext, useState, useMemo } from "react"

interface PasswordValueProviderProps {
  children: React.ReactNode
}

type PasswordValueType = {
  passwordValue: string
  setPasswordValue: React.Dispatch<React.SetStateAction<string>>
}

const PasswordDataContext = createContext<PasswordValueType>({
  passwordValue: "",
  setPasswordValue: () => {},
})

type PasswordCheckType = {
  passwordCheckValue: boolean
  setPasswordCheckValue: React.Dispatch<React.SetStateAction<boolean>>
}

const PasswordCheckContext = createContext<PasswordCheckType>({
  passwordCheckValue: false,
  setPasswordCheckValue: () => {},
})

export function PasswordValueProvider({
  children,
}: PasswordValueProviderProps) {
  const [passwordValue, setPasswordValue] = useState("")
  const [passwordCheckValue, setPasswordCheckValue] = useState(false)

  const PasswordDataValue = useMemo(
    () => ({ passwordValue, setPasswordValue }),
    [passwordValue, setPasswordValue]
  )

  const PasswordCheckValue = useMemo(
    () => ({ passwordCheckValue, setPasswordCheckValue }),
    [passwordCheckValue, setPasswordCheckValue]
  )

  return (
    <PasswordCheckContext.Provider value={PasswordCheckValue}>
      <PasswordDataContext.Provider value={PasswordDataValue}>
        {children}
      </PasswordDataContext.Provider>
    </PasswordCheckContext.Provider>
  )
}

export const PasswordDataValue = () => useContext(PasswordDataContext)
export const PasswordCheckValue = () => useContext(PasswordCheckContext)
