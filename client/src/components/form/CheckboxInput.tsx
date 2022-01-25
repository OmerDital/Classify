import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, CheckboxProps } from '@mui/material';

interface CheckboxInputProps extends CheckboxProps {
  name: string,
}

const CheckboxInput = ({
  name, ...rest
}: CheckboxInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
      }) => (
        <Checkbox
          onChange={onChange}
          checked={value}
          {...rest}
        />
      )}
    />
  );
};

export default CheckboxInput;