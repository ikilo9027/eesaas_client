import * as React from "react"
import TextField from "@mui/material/TextField"

export default function TextArea({ evaluationValue }: any) {
  const [values, setValues] = React.useState({ text: "" })

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    evaluationValue({ ...values, [name]: value }.text)
  }

  return (
    <TextField
      name="text"
      multiline
      rows={3}
      placeholder="품질의 평가를 자유롭게 남겨주세요."
      onChange={handleChange}
      sx={{
        width: "100%",
        backgroundColor: "#F3F3F3",
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "#AEB7C2",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#AEB7C2",
          },
        },
      }}
    />
  )
}
