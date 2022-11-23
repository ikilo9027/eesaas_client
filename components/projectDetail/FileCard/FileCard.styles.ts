import Card from "@mui/material/Card"
import { styled, experimental_sx as sx } from "@mui/system"

const FileCardMain = styled(Card, { name: "FileCardMain" })(
  sx({
    width: 896,
    height: { xs: "300px", sm: "320px", md: "500px", lg: "500px", xl: "500px" },
    borderRadius: "14px",
    backgroundColor: "#f9f9f9",
  })
)

export { FileCardMain }
