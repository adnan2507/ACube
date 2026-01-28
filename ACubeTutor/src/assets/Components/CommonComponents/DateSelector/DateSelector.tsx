

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function DateSelector(props:any) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DatePicker label={props.Label} />
      
    </LocalizationProvider>
  )
}

export default DateSelector
