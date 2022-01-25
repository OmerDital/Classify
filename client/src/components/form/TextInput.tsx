import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type TextInputProps = TextFieldProps & {
  rules?: Object,
  textType?: string,
  name: string,
  defaultValue?: string,
};

const defaultRules = {
  required: 'זהו שדה חובה',
};

const TextInput = ({
  name, label, defaultValue, rules, textType, variant, ...rest
}: TextInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ ...defaultRules, ...rules }}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          type={textType}
          variant={variant}
          {...rest}
        />
      )}
    />
  );
};

TextInput.defaultProps = {
  textType: 'text',
  defaultValue: '',
  // eslint-disable-next-line
  variant: 'outlined',
  rules: {}
};

export default TextInput;