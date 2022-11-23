import * as React from "react"
import Step1 from './Step1'
import Step2 from './Step2'

export default function MainStep() {

  const [step, setStep] = React.useState(1)
  const [emailValues, setEmailValues] = React.useState("")

  return (
    <>
      {
        step === 1 ?
          <Step1 setStep={setStep} setEmailValues={setEmailValues} emailValues={emailValues} /> :
          <Step2 emailValues={emailValues} />
      }
    </>
  )
}
