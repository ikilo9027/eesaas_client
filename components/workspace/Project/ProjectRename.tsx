import * as React from "react"
import Button from "@components/common/Button"
import { CreateProjectButton } from "./Project.styles"
import TextField from "@components/common/TextField"
import { renameWorkspace } from "@components/api/modules/workspace"
import { useRouter } from "next/router"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Divider,
} from "@mui/material"

interface Props {
  open: boolean
  handleClose: () => void
  id: number
}

export default function ProjectRename(props: Props) {
  const { open, handleClose, id } = props
  const [projectName, setProjectName] = React.useState<string>("")
  const router = useRouter()

  const handleChange = (event: { target: { value: string } }) => {
    const { value } = event.target
    setProjectName(value)
  }

  function handleRenameProject() {
    fetchRenameWorkspace()
    router.reload()
  }

  async function fetchRenameWorkspace() {
    let params = {
      workspaceId: id,
      workspaceName: projectName,
    }
    await renameWorkspace(params).then(() => {
      handleClose()
    })
  }

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleRenameProject()
    }
  }

  return (
    <>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-container .MuiDialog-paper": {
            margin: "0px auto",
            borderRadius: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "block",
            position: "relative",
            padding: {
              xs: "32px 25px 48px",
              sm: "32px 50px 48px 50px",
              md: "32px 50px 48px 50px",
              lg: "32px 50px 48px 50px",
              xl: "32px 50px 48px 50px",
            },
            boxSizing: "border-box",
          }}
        >
          <DialogTitle sx={{ p: "0px 0px 16px 0px", fontWeight: 700 }}>
            프로젝트 이름변경
          </DialogTitle>
          <Divider />
          <DialogContent sx={{ p: "32px 0px 0px 0px", fontWeight: 600 }}>
            프로젝트 이름
          </DialogContent>
          <DialogContent sx={{ p: "16px 0px 16px 0px" }}>
            <TextField
              autoFocus={true}
              placeholder="변경할 프로젝트 이름"
              width="100%"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "start", p: 0, mt: 6 }}
          >
            <Button
              label="취소"
              variant="outlined"
              height="47px"
              onClick={handleClose}
              width="152px"
            />
            <Button
              label="저장"
              height="47px"
              onClick={handleRenameProject}
              width="152px"
              disabled={projectName === "" ? true : false}
            />
          </DialogActions>
        </Box>
      </Dialog>
    </>
  )
}
