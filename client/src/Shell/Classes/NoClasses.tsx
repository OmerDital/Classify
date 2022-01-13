import {
  Button, Card, CardContent, Grid, IconButton, Stack, TextField, Typography
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const NoClasses = () => (
  <Grid container direction='column' justifyContent='space-around' alignItems='center' p={2}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={1}>
          <TextField type='number' label='טווח תלמידים בכתה *' variant='outlined' />
          <TextField label='שם השכבה *' variant='outlined' />
          <IconButton aria-label='save'>
            <SaveIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
    <Card sx={{ width: '70%' }}>
      <CardContent>
        <Stack direction='row' justifyContent='space-around' alignItems='center'>
          <Typography variant='h4'>על מנת ליצור כיתות לחץ</Typography>
          <Button variant='text' sx={{ textTransform: 'none' }}>
            <Typography variant='h2' fontFamily='Bubblegum Sans'>Classify</Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  </Grid>
);

export default NoClasses;