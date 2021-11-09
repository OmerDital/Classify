import { forwardRef } from 'react';
import { Button, Grid, useTheme } from '@mui/material';
import {
  Link, LinkProps, useMatch, useResolvedPath,
} from 'react-router-dom';

const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, to, ...props }: LinkProps, ref) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname });
    const theme = useTheme();

    return (
      <Link
        style={{
          borderBottom: match ? '1px solid' : 'none',
          fontSize: match
            ? theme.typography.fontSize + 2
            : theme.typography.fontSize
        }}
        to={to}
        ref={ref}
        role={undefined}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

const NavButton = ({ children, to }: LinkProps) => (
  <Grid item xs container justifyContent='center'>
    <Button
      component={CustomLink}
      to={to}
      sx={{ color: 'white', borderRadius: 0 }}
    >
      {children}
    </Button>
  </Grid>
);

export default NavButton;