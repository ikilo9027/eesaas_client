import { Box, Modal, Button } from "@mui/material"
import Icon from "@components/common/Icon"

const chargeModalStyle = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // boxShadow: 6,
  bgcolor: "background.paper",
  borderRadius: "14px",
  maxWidth: "600px",
  minWidth: "342px",
  p: "20px 24px",
}

interface Props {
  successOpen: boolean
  successHandleClose: () => void
}

export const ChargeFail = (props: Props) => {
  const { successOpen, successHandleClose } = props
  return (
    <>
      <Modal
        open={successOpen}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "white" },
        }}
      >
        <Box style={{ outline: "none" }} sx={chargeModalStyle}>
          <Icon icon="Error" width="200px" height="200px" iconColor="red" />
          <Box
            sx={{ color: "black", fontSize: "24px", fontWeight: 600, my: 2 }}
          >
            결제에 실패하였습니다.
          </Box>
          <Button
            variant="outlined"
            onClick={() => successHandleClose()}
            sx={{
              width: "160px",
              color: "red",
              borderColor: "red",
              "&:hover": {
                backgroundColor: "white",
                border: 1,
                borderColor: "red",
              },
            }}
          >
            확인
          </Button>
        </Box>
      </Modal>
    </>
  )
}
