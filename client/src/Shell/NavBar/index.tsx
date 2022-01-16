import {
  AppBar, Grid, Stack, Toolbar, Typography,
} from '@mui/material';
import NavButton from './NavButton';

const NavBar = () => (
  <AppBar position='relative' sx={{ height: '80px' }}>
    <Toolbar sx={{ p: '3 px' }}>
      <Grid container height='100%' direction='column' alignItems='center'>
        <Grid item>
          <Typography fontFamily='Bubblegum Sans' fontSize='36px' component='div'>
            Classify
          </Typography>
        </Grid>
        <Stack direction='row' spacing={2}>
          <NavButton
            to='/'
          >
            תלמידים
          </NavButton>
          <NavButton
            to='/classes'
          >
            חלוקת כיתות
          </NavButton>
        </Stack>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;