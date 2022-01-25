import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import ThemeProvider from './Theme';
import Rtl from './Rtl';
import { AlertProvider } from './Alert';
import Localization from './Localization';

const Providers = ({ children }: { children: JSX.Element[] }) => {
  const queryClient = new QueryClient();

  return (
    <Rtl>
      <CssBaseline />
      <ThemeProvider>
        <AlertProvider>
          <Localization>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </Localization>
        </AlertProvider>
      </ThemeProvider>
    </Rtl>
  );
};

export default Providers;