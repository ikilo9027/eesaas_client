import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import Button from "@components/common/Button"
import IconButton from "@components/common/IconButton"
import Select from "@components/common/Select"
import Tabs from "@components/common/Tabs"
import { DialogTitle, Box, Divider, CardMedia } from "@mui/material"
import { SrProgress, SrId } from "../hooks/SrProgress"
import DotsMobileStepper from "@components/common/DotsStepper"
import VideoEditor from "@components/common/VideoEditorBox"
import { PointContextValue } from "@components/payments/hooks/Point"
import axios, { AxiosResponse } from "axios"
import { Purchase, SuccessPurchaseProps } from "./api/Purchase"
import { getProgressState, setSrFile } from "@components/api/modules/file"
import { ChargeModal } from "@components/payments/charge/Charge"
import Backdrop from "@mui/material/Backdrop"
import ReactLoading from "react-loading"
import {
  GetSuccessPoint,
  GetSuccessPointProps,
} from "@components/payments/api/PointAPi"
import {
  FileSRCardMain,
  TitleTypography,
  SrMainBox,
  SrButton,
  SrDialog,
  SrTypography,
  SrFormatBox,
  SrDialogContent,
  SrDialogActions,
  SrImageBox,
  SrImage,
  SrImageTypographyBox,
  SrSettingTypographyBox,
  SrPaymentTitleTypographyBox,
  SrPaymentContentBox,
  SrChargeBox,
  SrCharge,
  BalanceBox,
  BalanceButton,
  SrPaymentProductTypographyBox,
} from "./FileSR.styles"
import { fontWeight } from "@mui/system"
interface SrPageProps {
  activeStep: number
  modelHandleNext: (modelValue: string) => void
}

interface ModelPayListProps {
  [index: string]: number
  일반: number
  저화질: number
}

const ModelProductList = ["일반", "저화질"]
const ModelPayList: ModelPayListProps = { 일반: 150, 저화질: 200 }

const SrPage = (props: SrPageProps) => {
  const { activeStep, modelHandleNext } = props

  return (
    <>
      <SrDialogContent>
        <TitleTypography>화질의 상태를 선택해주세요</TitleTypography>
        <SrImageTypographyBox>
          <SrTypography>{ModelProductList[0]}</SrTypography>
          <SrTypography>{ModelProductList[1]}</SrTypography>
        </SrImageTypographyBox>
        <SrImageBox>
          <SrImage>
            <Image
              onClick={() => modelHandleNext(ModelProductList[0])}
              src={"/mainPageImage/sampleOriginalImage.jpg"}
              alt={ModelProductList[0]}
              layout="fill"
              css={{ borderRadius: "8px" }}
            />
          </SrImage>
          <SrImage sx={{ ml: 4 }}>
            <Image
              onClick={() => modelHandleNext(ModelProductList[1])}
              src={"/mainPageImage/sampleLowImage.jpg"}
              alt={ModelProductList[1]}
              layout="fill"
              css={{ borderRadius: "8px" }}
            />
          </SrImage>
        </SrImageBox>
        <SrFormatBox></SrFormatBox>
      </SrDialogContent>
      <SrDialogActions sx={{ justifyContent: "center" }}>
        <DotsMobileStepper steps={3} activeStep={activeStep} />
      </SrDialogActions>
    </>
  )
}

interface SrSettingPageProps {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
  faceEnhenceValue: string
  setFaceEnhenceValue: React.Dispatch<React.SetStateAction<string>>
  fileformatValue: string
  setFileformatValue: React.Dispatch<React.SetStateAction<string>>
  codecValue: string
  setCodecValue: React.Dispatch<React.SetStateAction<string>>
  fileCardData: FileCardDataProps,
  segmentationList: string[]
}

const faceEnhanceData = ["False", "True"]
const codecData = ["libx264", "libx265"]
const fileFormatData = ["AUTO", "JPEG", "PNG"]

const SrSettingPage = (props: SrSettingPageProps) => {
  const {
    activeStep,
    handleNext,
    handleBack,
    faceEnhenceValue,
    setFaceEnhenceValue,
    fileformatValue,
    setFileformatValue,
    codecValue,
    setCodecValue,
    fileCardData,
    segmentationList
  } = props

  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <SrDialogContent>
        <Tabs value={value} handleChange={handleChange} />


        <div hidden={value !== 0}>
          <SrSettingTypographyBox>Face Enhance</SrSettingTypographyBox>
          <Select
            menuItemData={faceEnhanceData}
            data={faceEnhenceValue}
            setData={setFaceEnhenceValue}
          />
          <SrSettingTypographyBox>저장 포맷</SrSettingTypographyBox>
          <Select
            menuItemData={fileFormatData}
            data={fileformatValue}
            setData={setFileformatValue}
          />
          <Box sx={{ height: "138px" }}></Box>
        </div>



        <div hidden={value !== 1}>
          <SrSettingTypographyBox>Codec</SrSettingTypographyBox>
          <Select
            menuItemData={codecData}
            data={codecValue}
            setData={setCodecValue}
          />
          <SrSettingTypographyBox>Quality</SrSettingTypographyBox>
          <Select
            menuItemData={fileFormatData}
            data={fileformatValue}
            setData={setFileformatValue}
          />
          <Box sx={{ height: "138px" }}></Box>
        </div>
        <div hidden={value !== 2}>
          <VideoEditor fileCardData={fileCardData} segmentationList={segmentationList} />
          {/* <Box sx={{ height: "138px" }}></Box> */}
        </div>
      </SrDialogContent>
      <SrDialogActions>
        <Button
          label="이전"
          height="52px"
          onClick={() => handleBack()}
          width="100px"
          borderRadius="4px"
          variant="outlined"
          backgroundColor="transparent"
        />
        <DotsMobileStepper steps={3} activeStep={activeStep} />
        <Button
          label="변환하기"
          height="52px"
          onClick={() => handleNext()}
          width="100px"
          borderRadius="4px"
          backgroundColor="#C32632"
        />
      </SrDialogActions>
    </>
  )
}

interface SrPaymentPageProps {
  activeStep: number
  modelProductValue: string
  paymentAmount: number
  handleSRStart: () => void
  handleBack: () => void
  handleClose: () => void
}

const SrPaymentPage = (props: SrPaymentPageProps) => {
  const {
    activeStep,
    modelProductValue,
    paymentAmount,
    handleSRStart,
    handleBack,
    handleClose,
  } = props
  const { pointValue, setPointValue } = PointContextValue()
  const [paymentOpen, setPaymentOpen] = React.useState<boolean>(false)

  const balanceOpen = () => {
    setPaymentOpen(true)
  }

  const balanceClose = () => {
    setPaymentOpen(false)
  }

  const pointData = async () => {
    const data: AxiosResponse<GetSuccessPointProps> = await GetSuccessPoint(
      sessionStorage.getItem("userId")
    )
    setPointValue(data.data.point)
  }

  React.useEffect(() => {
    pointData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointValue])
  const balance = pointValue - paymentAmount

  return (
    <>
      <SrDialogContent>
        <SrPaymentTitleTypographyBox>결제상품</SrPaymentTitleTypographyBox>
        <SrPaymentProductTypographyBox>모델</SrPaymentProductTypographyBox>
        <SrPaymentContentBox>
          <Box>{modelProductValue}</Box>
          <Box>{ModelPayList[modelProductValue]}원</Box>
        </SrPaymentContentBox>
        <Divider />
        <Box sx={{ height: "70px" }}></Box>
        <SrPaymentContentBox sx={{ fontSize: "16px", fontWeight: 700 }}>
          <Box>최종 결제금액</Box>
          <Box sx={{ color: "#F32829" }}>{paymentAmount}원</Box>
        </SrPaymentContentBox>
        <SrChargeBox>
          <SrCharge>
            <Box>보유 포인트</Box>
            <Box sx={{ color: "black" }}>
              {pointValue.toLocaleString("ko-kr")}원
            </Box>
          </SrCharge>
          <SrCharge>
            <Box>잔액</Box>
            <Box sx={{ color: "black" }}>
              {balance.toLocaleString("ko-kr")}원
            </Box>
          </SrCharge>
        </SrChargeBox>
        <Divider />
        <BalanceBox>
          <Box>잔액이 모자라신가요?</Box>
          <BalanceButton onClick={() => balanceOpen()}>충전하기</BalanceButton>
        </BalanceBox>
      </SrDialogContent>
      <SrDialogActions>
        <Button
          label="이전"
          height="52px"
          onClick={() => handleBack()}
          width="100px"
          borderRadius="4px"
          variant="outlined"
          backgroundColor="transparent"
        />
        <DotsMobileStepper steps={3} activeStep={activeStep} />
        <Button
          disabled={balance >= 0 ? false : true}
          label="결제"
          height="52px"
          onClick={() => handleSRStart()}
          width="100px"
          borderRadius="4px"
          backgroundColor="#C32632"
        />
        <ChargeModal open={paymentOpen} handleClose={balanceClose} />
      </SrDialogActions>
    </>
  )
}

export interface DialogTitleProps {
  children?: React.ReactNode
  onClose: () => void
}

const SrTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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

interface Props {
  fileType: string
  getSrHistory: () => void
  fileCardData: FileCardDataProps
  segmentationList: string[]
}

interface FileCardDataProps {
  type: "image" | "video"
  url: string
  duration: number
}

export default function FileSR(props: Props) {
  const { fileType, getSrHistory, fileCardData, segmentationList } = props
  const { srProgress, setSrProgress } = SrProgress()
  const { srId, setSrId } = SrId()
  const [progressCount, setProgressCount] = React.useState(0)

  const [open, setOpen] = React.useState<boolean>(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const [modelProductValue, setModelProductValue] = React.useState("")
  const [faceEnhenceValue, setFaceEnhenceValue] = React.useState(
    faceEnhanceData[0]
  )
  const [fileformatValue, setFileformatValue] = React.useState(
    fileFormatData[0]
  )
  const [codecValue, setCodecValue] = React.useState(
    codecData[0]
  )

  const [paymentAmount, setPaymentAmount] = React.useState(0)

  const { pointValue, setPointValue } = PointContextValue()

  const [userId, setUserId] = React.useState<string | null>("")
  const [SrStorageValue, setSrStorageValue] = React.useState(0)

  const [loading, setLoading] = React.useState(false)
  const [SrLodingOpen, setSrLodingOpen] = React.useState(false)

  const modelHandleNext = (modelValue: string) => {
    setModelProductValue(modelValue)
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleNext = () => {
    setPaymentAmount(ModelPayList[modelProductValue])
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleOpen = () => {
    setActiveStep(0)
    setModelProductValue("")
    setFaceEnhenceValue(faceEnhanceData[0])
    setFileformatValue(fileFormatData[0])
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const router = useRouter()
  const queries = router.query

  async function handleSRStart() {
    setOpen(false)

    const purchaseResult: AxiosResponse<SuccessPurchaseProps> = await Purchase(
      sessionStorage.getItem("userId"),
      [modelProductValue],
      paymentAmount
    )
    if (purchaseResult.data.status === "success") {
      fetchSrStart()
      setLoading(true)
      setSrLodingOpen(!SrLodingOpen)
      setTimeout(() => {
        router.reload()
      }, 1000)
    } else {
    }
  }
  async function fetchSrStart() {
    let requestBody = {
      id: queries.fileId,
      userId: sessionStorage.getItem("userId"),
      workspaceTitle: queries.project,
      filename: queries.id,
      srType: modelProductValue === "일반" ? "NORMAL" : "LOW",
      format: fileformatValue,
      faceenhance: faceEnhenceValue === "True" ? true : false,
    }

    setPointValue(pointValue - paymentAmount)

    // const replacePath = router.asPath
    // router.replace(replacePath, undefined, { shallow: true })

    await setSrFile(requestBody, fileType).then((data) => {
      setSrId(String(data.data.id))
      // setTimeout(() => {
      //   getSrHistory()
      // }, 5000)
    })
  }

  async function fetchProgressState() {
    let params = {
      srId: srId,
    }
    await getProgressState(params).then((data) => {
      setSrProgress(data.data.srstatus)
      setProgressCount(progressCount + 1)
    })
  }

  React.useEffect(() => {
    if (progressCount !== 0) {
      if (srProgress == "processed") {
        setProgressCount(0)
        return
      }

      const progress = setTimeout(() => {
        fetchProgressState()
      }, 5000)

      return () => clearTimeout(progress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressCount])

  // React.useEffect(() => {
  //   if (srId !== "") {
  //     fetchProgressState()
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [srId])

  React.useEffect(() => {
    setUserId(sessionStorage.getItem("userId"))
    if (userId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/workspace/getsize/${userId}`)
        .then((data) => {
          setSrStorageValue(parseInt(data.data))
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srId])

  return (
    <>
      <FileSRCardMain>
        {SrStorageValue >= 30 ? (
          <TitleTypography component="div" sx={{ color: "red" }}>
            사용가능 용량 초과 입니다.
          </TitleTypography>
        ) : (
          <TitleTypography component="div">
            고화질로 변환 하세요
          </TitleTypography>
        )}
        <SrButton
          disabled={SrStorageValue >= 30 ? true : false}
          onClick={handleOpen}
          label="시작하기"
          backgroundColor="#C32632"
        />
      </FileSRCardMain>
      <SrDialog open={open} fullWidth maxWidth="sm">
        <SrTitle onClose={handleClose} />
        <SrMainBox>
          {activeStep === 0 && (
            <SrPage activeStep={activeStep} modelHandleNext={modelHandleNext} />
          )}
          {activeStep === 1 && (
            <SrSettingPage
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
              faceEnhenceValue={faceEnhenceValue}
              setFaceEnhenceValue={setFaceEnhenceValue}
              fileformatValue={fileformatValue}
              setFileformatValue={setFileformatValue}
              codecValue={codecValue}
              setCodecValue={setCodecValue}
              fileCardData={fileCardData}
              segmentationList={segmentationList}
            />
          )}
          {activeStep === 2 && (
            <SrPaymentPage
              activeStep={activeStep}
              modelProductValue={modelProductValue}
              paymentAmount={paymentAmount}
              handleSRStart={handleSRStart}
              handleBack={handleBack}
              handleClose={handleClose}
            />
          )}
        </SrMainBox>
      </SrDialog>
      {loading && (
        <Box>
          <Backdrop
            sx={{
              color: "#fff",
              fontSize: "25px",
              fontWeight: 700,
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={SrLodingOpen}
          >
            {"이미지 변환 준비중"}
            <ReactLoading type="bubbles" color="#fff" />
          </Backdrop>
        </Box>
      )}
    </>
  )
}
