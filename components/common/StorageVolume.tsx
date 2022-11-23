import * as React from "react"
import axios from "axios"
import { Box, Divider } from "@mui/material"
import { StorageContextValue } from "@components/hooks/Storage"

interface Props {
  mobileOpen: boolean
}

export default function StorageVolume(props: Props) {
  const { mobileOpen } = props
  const [userId, setUserId] = React.useState<string | null>("")
  const { storageValue, setStorageValue } = StorageContextValue()

  React.useEffect(() => {
    setUserId(sessionStorage.getItem("userId"))
    if (userId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/workspace/getsize/${userId}`)
        .then((data) => {
          setStorageValue(data.data)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileOpen])

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F3F3F3",
          p: "4px 16px 4px 16px",
          height: "48px",
          // mt: 1,
          // mb: 2,
        }}
      >
        <Box sx={{ fontSize: "14px", color: "#4E5A68", fontWeight: 500 }}>
          스토리지 용량
        </Box>
        <Box
          sx={{
            display: "flex",
            fontSize: "14px",
            color: "#5E5E5E",
            fontWeight: 600,
          }}
        >
          {parseFloat(storageValue).toFixed(2)}GB/
          <Box sx={{ color: "#C32632" }}>30GB</Box>
        </Box>
      </Box>
      <Divider sx={{ mb: 1 }} />
    </>
  )
}
