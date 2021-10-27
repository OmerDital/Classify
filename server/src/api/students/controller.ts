import student from './model';
import { NextFunction, Request, Response } from 'express';

export const getAll = (req: Request, res: Response, next: NextFunction) => {
  student.find()
    .then(entities => {
      res.send(entities);
    }).catch(next);
};
