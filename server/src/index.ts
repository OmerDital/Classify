import startServer from './config/express';
import connectDatabase from './config/database';

connectDatabase()
  .then(startServer)
  .then(port => {
    console.log(`server started on port ${port}!`);
  }).catch(() => {
  console.error('An error occured while starting the website');
});