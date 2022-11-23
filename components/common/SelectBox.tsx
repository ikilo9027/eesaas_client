import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/router';


interface Props {
  label: string
  date: number
  setDate: React.Dispatch<React.SetStateAction<number>>
}

export default function SelectBox(props: Props): JSX.Element {
  const {
    label,
    date,
    setDate
  } = props
  const router = useRouter()
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let [item, setItem] = React.useState(
    label === (router.locale === 'ko' ? '월' : 'month') ?
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      : [year, year - 1, year - 2, year - 3, year - 4]);

  const handleChange = (event: SelectChangeEvent) => {
    setDate(Number(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={String(date)}
        onChange={handleChange}
      >
        {item.map((text, index) => (
          <MenuItem value={text} key={`date${index}`}>{text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SelectBox.defaultProps = {
  label: "Select"
}