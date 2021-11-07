import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <AppBar position='relative'>
    <Toolbar>
      <Typography variant='h3' gutterBottom component='div'>
        Classify
      </Typography>
      <Button component={Link} to='/' sx={{ color: 'white' }}>
        Students Page
      </Button>
      <Button component={Link} to='/classes' sx={{ color: 'white' }}>
        Classes Page
      </Button>
      <Button component={Link} to='/grade-settings' sx={{ color: 'white' }}>
        grade settings
      </Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;