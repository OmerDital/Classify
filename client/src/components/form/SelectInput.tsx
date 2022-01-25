import { Controller, useFormContext } from 'react-hook-form';
import { Select, SelectProps, styled } from '@mui/material';

interface SelectInputProps extends SelectProps {
  name: string,
  defaultValue?: number,
  label: string
}
// check how to fix
const StyledSelect = styled(Select)`
  fieldset[aria-hidden=true] legend {
    visibility: visible
  }
`;

const SelectInput = ({
  name, label, children, defaultValue, ...rest
}: SelectInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value },
      }) => (
        <>
          <StyledSelect
            label={label}
            onChange={onChange}
            value={value}
            {...rest}
          >
            {children}
          </StyledSelect>
        </>
      )}
    />
  );
};

SelectInput.defaultProps = {
  defaultValue: 0,
};

export default SelectInput;