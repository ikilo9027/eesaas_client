import * as React from "react"
import {
  Box,
  Dialog,
  Link,
  Menu as MuiMenu,
  Modal,
  Typography,
} from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Icon from "./Icon"
import IconButton from "./IconButton"
import { FileInfo } from "@components/projectDetail/FileInfo"
import { getDetailFile } from "@components/api/modules/file"
import { useRouter } from "next/router"
import Button from "./Button"
import FileRating from "@components/projectDetail/FileHistory/FileHistoryCard/FileRating"

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
  fileInfo: FileInfoData
  deleteStatus?: boolean
}
interface DeleteModalProps {
  open: boolean
  onClose: () => void
  id: number
  onDelete: (id: number) => void
}
interface FileInfoData {
  FPS: number
  bitrate: number
  codec: string
  date: string
  duration: string
  filename: string
  format: string
  height: number
  signedUrl: string
  size: number
  type: string
  width: number
  id: number
}

interface InfoMenuProps {
  open: boolean
  onClose: () => void
  fileInfo: FileInfoData
}

interface DownloadMenuProps {
  item: string
  onClick: () => void
  fileURL: string
}

interface FileRatingMenuProps {
  item: string
  handleClose: () => void
}

interface DeleteMenuProps {
  item: string
  onDelete: (id: number) => void
  id: number
  handleClose: () => void
  deleteStatus?: boolean
}

const InfoMenu = (props: InfoMenuProps) => {
  const { open, onClose, fileInfo } = props
  const [fileInfodData, setFileInfodData] = React.useState(Object)
  function formatFileSize(x: number) {
    if (x === 0) {
      return 0
    } else {
      var s = ["bytes", "KB", "MB", "GB", "TB", "PB"]
      var e = Math.floor(Math.log(x) / Math.log(1024))
      return (x / Math.pow(1024, e)).toFixed(2) + " " + s[e]
    }
  }

  function fetchDetailFile() {
    if (fileInfo.type === "image") {
      setFileInfodData({
        fileName: fileInfo.filename,
        format: fileInfo.format,
        size: formatFileSize(fileInfo.size),
        resolution: `${fileInfo.width} x ${fileInfo.height}`,
      })
    } else {
      setFileInfodData({
        fileName: fileInfo.filename,
        format: fileInfo.format,
        size: formatFileSize(fileInfo.size),
        resolution: `${fileInfo.width} x ${fileInfo.height}`,
        time: fileInfo.duration,
        bitrate: fileInfo.bitrate,
        codec: fileInfo.codec,
        fps: fileInfo.FPS,
      })
    }
  }

  React.useEffect(() => {
    if (open) {
      fetchDetailFile()
      // if (fileInfo.type === 'normal' || fileInfo.type === 'people') {
      //   console.log("AAAA", fileInfo)
      // } else {
      //   fetchDetailFile()
      // }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        style: { borderRadius: "14px" },
      }}
    >
      <FileInfo fileType={fileInfo.type} fileInfoData={fileInfodData} />
    </Dialog>
  )
}

const DownloadMenu = (props: DownloadMenuProps) => {
  const { item, onClick, fileURL } = props
  return (
    <Link href={fileURL} underline="none" color="black" download>
      <MenuItem onClick={onClick}>
        <ListItemIcon>
          <Icon icon={item} />
        </ListItemIcon>
        <ListItemText>다운로드</ListItemText>
      </MenuItem>
    </Link>
  )
}

const FileRatingMenu = (props: FileRatingMenuProps) => {
  const { item, handleClose } = props
  const [open, setOpen] = React.useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <MenuItem onClick={() => handleOpen()}>
        <ListItemIcon>
          <Icon icon={item} />
        </ListItemIcon>
        <ListItemText>평가하기</ListItemText>
      </MenuItem>
      <FileRating open={open} setOpen={setOpen} menuClose={handleClose} />
    </>
  )
}

const DeleteMenu = (props: DeleteMenuProps) => {
  const { item, onDelete, id, handleClose, deleteStatus } = props
  const [open, setOpen] = React.useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => {
    setOpen(false)
    handleClose()
  }
  const router = useRouter()

  return (
    <>
      <MenuItem
        disabled={
          router.asPath.split("/").length === 4 && deleteStatus ? true : false
        }
        onClick={onOpen}
      >
        <ListItemIcon>
          <Icon icon={item} />
        </ListItemIcon>
        <ListItemText>파일삭제</ListItemText>
      </MenuItem>
      <DeleteModal open={open} onClose={onClose} id={id} onDelete={onDelete} />
    </>
  )
}

const DeleteModal = (props: DeleteModalProps) => {
  const { open, onClose, id, onDelete } = props
  return (
    <Modal open={open}>
      <Box sx={deleteModalStyle}>
        <Icon icon="warning" iconColor="red" width="40px" height="40px" />
        <Box sx={{ width: "240px", textAlign: "center" }}>
          <Typography variant="h6" fontWeight={700} sx={{ mt: 1 }}>
            파일 삭제
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 1 }}>
          정말 삭제하시겠습니까?
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          삭제하신 파일은 복구할 수 없습니다.
        </Typography>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ mr: "2px", width: "100%" }}>
            <Button
              label="확인"
              onClick={() => {
                onDelete(id)
                onClose()
              }}
            />
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

export default function Menu(props: Props) {
  const { iconColor, iconTheme, onDelete, fileInfo, deleteStatus } = props
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [infoOpen, setInfoOpen] = React.useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const infoModalOpen = () => {
    setAnchorEl(null)
    setInfoOpen(true)
  }
  const infoModalClose = () => setInfoOpen(false)

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
        <MenuItem onClick={infoModalOpen}>
          <ListItemIcon>
            <Icon icon="Info" />
          </ListItemIcon>
          <ListItemText>파일정보</ListItemText>
        </MenuItem>
        <DownloadMenu
          item="Download"
          onClick={handleClose}
          fileURL={fileInfo.signedUrl}
        />
        <FileRatingMenu item="Star" handleClose={handleClose} />
        <DeleteMenu
          item="Delete"
          onDelete={onDelete}
          id={fileInfo.id}
          handleClose={handleClose}
          deleteStatus={deleteStatus}
        />
      </MuiMenu>
      <InfoMenu open={infoOpen} onClose={infoModalClose} fileInfo={fileInfo} />
    </>
  )
}
