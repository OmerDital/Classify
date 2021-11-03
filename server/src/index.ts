import startServer from './config/express';
import connectDatabase from './config/database';

const startup = async () => {
  try {
    await connectDatabase();
    const port = await startServer();
    console.log(`server started on port ${port}!`);
  } catch (error) {
    console.error('An error occurred while starting the website');
  }
};

startup();
