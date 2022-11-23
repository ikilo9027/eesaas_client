import * as React from "react"
import { styled } from "@mui/system"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Typography from "@mui/material/Typography"
import IconButton from "@components/common/IconButton"
import GenreButtonGroup from "@components/common/GenreButtonGroup"
import Rating from "@components/common/Rating"
import TextArea from "@components/common/TextArea"
import Button from "@components/common/Button"
import { setReview } from "@components/api/modules/review"

export interface DialogTitleProps {
  children?: React.ReactNode
  onClose: () => void
}

const RatingDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          icon="Close"
          iconColor="black"
          onClick={onClose}
          sx={{
            position: "absolute",
            left: "0px",
            top: "0px",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        />
      ) : null}
    </DialogTitle>
  )
}

const CustomIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "white",
    borderColor: "#C32632",
  },
  ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
    backgroundColor: "white",
  },
})

interface FileRatingProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuClose: () => void
}

export default function FileRating(props: FileRatingProps) {
  const { open, setOpen, menuClose } = props
  // const [open, setOpen] = React.useState<boolean>(false)
  const [score, setScore] = React.useState(0)
  const [genre, setGenre] = React.useState("기타")
  const [evaluation, setEvaluation] = React.useState("")
  // const handleOpen = () => setOpen(true)
  function handleClose(type: string) {
    if (type === "close") {
      setOpen(false)
      menuClose()
    } else {
      fetchSetReview()
      menuClose()
    }
  }
  function scoreValue(value: number) {
    if (value > 0) setScore(value)
  }
  function genreValue(value: string) {
    if (value !== "기타") setGenre(value)
  }
  function evaluationValue(value: string) {
    if (value === "") setEvaluation("")
    if (value !== "") setEvaluation(value)
  }

  async function fetchSetReview() {
    let requestBody = {
      userId: 5882,
      fileId: 12,
      score: Number(score),
      evaluation: evaluation,
      genre: genre,
    }

    await setReview(requestBody).then((data) => {
      setOpen(false)
    })
  }

  return (
    <>
      {/* <CustomIconButton
        icon="Star"
        iconTheme="TwoTone"
        iconColor="rgb(35, 47, 52, 0.8)"
        onClick={handleOpen}
        sx={{ p: "8px 16px 8px 8px" }}
      /> */}
      <Dialog
        open={open}
        sx={{ "& .MuiBackdrop-root": { backgroundColor: "transparent" } }}
      >
        <RatingDialogTitle onClose={() => handleClose("close")} />
        <DialogContent sx={{ mt: 4 }}>
          <Rating scoreValue={scoreValue} />
          <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
            <Typography sx={{ color: "#4E5A68" }}>별점을 선택하세요</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
            <Typography
              variant="body1"
              fontWeight="700"
              sx={{ color: "#0D0D0D" }}
            >
              장르를 선택해 주세요!
            </Typography>
          </Box>
          <GenreButtonGroup genreValue={genreValue} />
          <Box sx={{ pt: 2 }}>
            <TextArea evaluationValue={evaluationValue} />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 0 }}>
          <Button
            label="평가 제출하기"
            height="52px"
            onClick={() => handleClose("start")}
            disabled={evaluation === "" ? true : false}
          />
        </DialogActions>
      </Dialog>
    </>
  )
}
