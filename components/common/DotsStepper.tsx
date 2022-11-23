import MobileStepper from "@mui/material/MobileStepper"

interface Props {
  steps: number
  activeStep: number
}

export default function DotsMobileStepper(props: Props) {
  const { steps, activeStep } = props

  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      nextButton={null}
      backButton={null}
      sx={{
        display: "flex",
        justifyContent: "center",
        "& .MuiMobileStepper-dotActive": {
          backgroundColor: "#C32632",
        },
      }}
    />
  )
}
