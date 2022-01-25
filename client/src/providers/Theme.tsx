import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { heIL } from '@mui/material/locale';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#660066',
    },
    background: {
      paper: '#F6F4F6'
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'Bubblegum Sans',
      'sans-serif'
    ].join(',')
  }
}, heIL);

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;