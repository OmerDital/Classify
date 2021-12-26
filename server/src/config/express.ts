import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from '../api';

export default () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('tiny'));
  app.use('/api', apiRouter);

  const port = process.env.PORT || 3001;

  return new Promise(resolve => {
    app.listen(port, () => resolve(port));
  });
};