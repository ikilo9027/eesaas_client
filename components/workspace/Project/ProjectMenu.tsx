import * as React from "react"
import { Box, Menu as MuiMenu, Modal, Typography } from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Icon from "@components/common/Icon"
import Button from "@components/common/Button"
import IconButton from "@components/common/IconButton"
import ProjectRename from "./ProjectRename"

const deleteModalStyle = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "4px",
  maxWidth: "600px",
  p: "20px 24px",
}
interface Props {
  iconColor: string
  iconTheme: "Filled" | "Outlined" | "Rounded" | "TwoTone" | "Sharp"
  onDelete: (id: number) => void
  id: number
}

interface DeleteModalProps {
  open: boolean
  onClose: () => void
  id: number
  onDelete: (id: number) => void
}

interface DeleteMenuProps {
  item: string
  onDelete: (id: number) => void
  id: number
  handleClose: () => void
}

const DeleteMenu = (props: DeleteMenuProps) => {
  const { item, onDelete, id, handleClose } = props
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)

  const onClose = () => {
    setOpen(false)
    handleClose()
  }

  return (
    <>
      <MenuItem onClick={onOpen}>
        <ListItemIcon>
          <Icon icon={item} />
        </ListItemIcon>
        <ListItemText>삭제</ListItemText>
      </MenuItem>
      <DeleteModal open={open} onClose={onClose} id={id} onDelete={onDelete} />
    </>
  )
}

const DeleteModal = (props: DeleteModalProps) => {
  const { open, onClose, id, onDelete } = props
  function onClickDeleteBtn() {
    onDelete(id)
    onClose()
  }
  return (
    <Modal open={open}>
      <Box sx={deleteModalStyle}>
        <Icon icon="warning" iconColor="red" width="40px" height="40px" />
        <Box sx={{ width: "240px", textAlign: "center" }}>
          <Typography variant="h6" fontWeight={700} sx={{ mt: 1 }}>
            프로젝트 삭제
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 1 }}>
          정말 삭제하시겠습니까?
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          삭제하신 프로젝트는 복구할 수 없습니다.
        </Typography>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ mr: "2px", width: "100%" }}>
            <Button label="확인" onClick={onClickDeleteBtn} />
          </Box>
          <Box sx={{ ml: "2px", width: "100%" }}>
            <Button
              label="취소"
              color="white"
              border={1}
              borderColor="#AEB7C2"
              onClick={onClose}
            />
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

interface RenameMenuProps {
  item: string
  id: number
  handleClose: () => void
}

const RenameMenu = (props: RenameMenuProps) => {
  const { item, id, handleClose } = props
  const [open, setOpen] = React.useState(false)

  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
    handleClose()
  }
  return (
    <>
      <MenuItem onClick={onOpen}>
        <ListItemIcon>
          <Icon icon={item} />
        </ListItemIcon>
        <ListItemText>이름변경</ListItemText>
      </MenuItem>
      <ProjectRename open={open} handleClose={onClose} id={id} />
    </>
  )
}

export default function ProjectMenu(props: Props) {
  const { iconColor, iconTheme, onDelete, id } = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        icon="more_vert"
        iconColor={iconColor}
        iconTheme={iconTheme}
        sx={{
          width: "8px",
          p: { xs: "0px", sm: "8px", md: "8px", lg: "8px", xl: "8px" },
          "&:hover": { backgroundColor: "white" },
          ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
            backgroundColor: "white",
          },
        }}
      />
      <MuiMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <DeleteMenu
          item="Delete"
          onDelete={onDelete}
          id={id}
          handleClose={handleClose}
        />
        <RenameMenu item="Edit" id={id} handleClose={handleClose} />
      </MuiMenu>
    </>
  )
}
