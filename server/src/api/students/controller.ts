import { NextFunction, Request, Response } from 'express';
import student from './model';

export const getAll = (req: Request, res: Response, next: NextFunction) => {
  student.find()
    .then(entities => {
      res.send(entities);
    }).catch(next);
};
