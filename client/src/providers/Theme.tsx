import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#660066'
    },
  },
});

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
