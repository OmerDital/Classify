import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Shell = () => (
  // find better way to calc the height
  <>
    <NavBar />
    <Grid container sx={{ height: 'calc(100% - 80px)' }}>
      <Outlet />
    </Grid>
  </>
);

export default Shell;