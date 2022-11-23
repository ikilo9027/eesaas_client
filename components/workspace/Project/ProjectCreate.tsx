import * as React from "react"
import Button from "@components/common/Button"
import { CreateProjectButton } from "./Project.styles"
import TextField from "@components/common/TextField"
import { setWorkspace } from "@components/api/modules/workspace"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Divider,
} from "@mui/material"

interface Props {
  getWorkspace: () => void
}

export default function ProjectCreate(props: Props) {
  const { getWorkspace } = props
  const [projectName, setProjectName] = React.useState<string>("")
  const [projectNameDuplicate, setProjectNameDuplicate] =
    React.useState<string>("")
  const [projectHelperText, setProjectHelperText] = React.useState("")
  const [open, setOpen] = React.useState<boolean>(false)

  const handleOpen = () => {
    setProjectNameDuplicate("")
    setProjectHelperText("")
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const handleChange = (event: { target: { value: string } }) => {
    const { value } = event.target
    const projectNameCheck =
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(value)
    if (projectNameCheck) {
      setProjectHelperText("특수문자는 사용할 수 없습니다.")
    } else {
      setProjectHelperText("")
    }
    setProjectName(value)
  }

  function handleCreateProject() {
    fetchSetWorkspace()
  }

  async function fetchSetWorkspace() {
    let requestBody = {
      userId: sessionStorage.getItem("userId"),
      workspace: projectName,
    }
    await setWorkspace(requestBody)
      .then(() => {
        getWorkspace()
        handleClose()
      })
      .catch(function (error) {
        if (error.response.data.statusCode === 403) {
          setProjectNameDuplicate("중복된 프로젝트명 입니다.")
        }
      })
  }

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleCreateProject()
    }
  }

  return (
    <>
      <CreateProjectButton
        label="추가하기"
        variant="outlined"
        startIcon="add"
        onClick={handleOpen}
      />
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
            프로젝트 추가하기
          </DialogTitle>
          <Divider />
          <DialogContent sx={{ p: "32px 0px 0px 0px", fontWeight: 600 }}>
            프로젝트 이름
          </DialogContent>
          <DialogContent sx={{ p: "16px 0px 16px 0px" }}>
            <TextField
              autoFocus={true}
              placeholder="프로젝트 추가하기"
              width="100%"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              helperText={projectNameDuplicate || projectHelperText}
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
              onClick={handleCreateProject}
              width="152px"
              disabled={
                projectName === "" || projectHelperText !== "" ? true : false
              }
            />
          </DialogActions>
        </Box>
      </Dialog>
    </>
  )
}
