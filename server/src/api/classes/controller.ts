import { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import kmeans from 'kmeans-ts';
import { Student } from '../../../../common/view-models/student';

interface calculateClassesProps {
  students: Student[],
  classCapacity: number
}

export const calculateClasses = async (req: Request, res: Response, next: NextFunction) => {
  const { students, classCapacity }: calculateClassesProps = req.body;
};

const getVectors = (students: Student[]) => students.reduce((vectors, currStudent) => {
  const { social, educational, emotional } = currStudent.parameters;

  if (social && educational && emotional) {
    vectors.push([social, educational, emotional]);

    return vectors;
  }

  throw new Error('parameters were not filled');
}, [] as number[][]);

const calculate = (students: Student[], classCapacity: number) => {
  const vectors = getVectors(students);
  const numOfClasses = students.length / classCapacity;

  const simillarGroups = kmeans(vectors, numOfClasses);
};