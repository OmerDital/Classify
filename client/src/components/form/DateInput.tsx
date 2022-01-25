import { Controller, useFormContext } from 'react-hook-form';
import { MobileDatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import moment from 'moment';

interface DateInputProps {
  name: string,
  label: string
}

const DateInput = ({
  name, label
}: DateInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
      }) => (
        <MobileDatePicker
          onChange={onChange}
          value={moment(value)}
          label={label}
          renderInput={params => <TextField {...params} />}
          inputFormat='DD-MM-YYYY'
          minDate={moment(new Date(1948, 5, 14))}
          maxDate={moment(Date.now())}
          okText='אישור'
          cancelText='ביטול'
        />
      )}
    />
  );
};

export default DateInput;