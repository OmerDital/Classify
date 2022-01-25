import { NextFunction, Request, Response } from 'express';
import Student from '../students/model';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const student = req.body;
    student.requestedFriends = [student.friendA, student.friendB, student.friendC];
    delete student.friendA;
    delete student.friendB;
    delete student.friendC;

    await Student.create(student);

    console.log('student created succesfuly');
    return res.status(200);
  } catch (e) {
    return next(e);
  }
};