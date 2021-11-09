import {
  AppBar, Grid, Toolbar, Typography,
} from '@mui/material';
import NavButton from './NavButton';

const NavBar = () => (
  <AppBar position='relative'>
    <Toolbar sx={{ padding: '5px' }}>
      <Grid container>
        <Grid container direction='column' alignItems='center'>
          <Typography variant='h3' gutterBottom component='div'>
            Classify
          </Typography>
          <Grid container width='50%'>
            <NavButton
              to='/'
            >
              תלמידים
            </NavButton>
            <NavButton
              to='/classes'
            >
              כיתות
            </NavButton>
            <NavButton
              to='/grade-settings'
            >
              הגדרת שכבה
            </NavButton>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;