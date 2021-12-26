import { NextFunction, Request, Response } from 'express';
import Student from './model';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const entities = await Student.find();

    return res.send(entities);
  } catch (e) {
    return next(e);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const student = await Student.findById(req.params.id);

    return student ? res.send(student) : res.status(404).send({
      message: `student with id ${req.params.id} not exists`,
    });
  } catch (e) {
    return next(e);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });

    console.log('student updated succesfuly');
    return res.status(200);
  } catch (e) {
    return next(e);
  }
};