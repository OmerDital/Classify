import { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import kmeans from 'kmeans-ts';
import { Student } from '../../../../common/view-models/student';

interface CalculateClassesProps {
  students: Student[],
  classCapacity: number
}

const getVectors = (students: Student[]) => students.reduce((vectors, currStudent) => {
  const { social, educational, emotional } = currStudent.parameters;

  if (social && educational && emotional) {
    vectors.push([social, educational, emotional]);

    return vectors;
  }

  throw new Error('parameters were not filled');
}, [] as number[][]);

const vectorsMock = [
  [1],
  [2],
  [9],
  [10]
];

const calculate = (students: Student[], classCapacity: number) => {
  // const vectors = getVectors(students);
  const numOfClasses = students.length / classCapacity;

  const simillarGroups = kmeans(vectorsMock, numOfClasses);

  const classes: Student[][] = [];
  // Gender and friends are not calculated here
  for (let i = 0; i < simillarGroups.indexes.length; i++) {
    const classIndex = simillarGroups.indexes[i];
    if (!classes[classIndex]) {
      classes[classIndex] = [];
    }

    classes[classIndex].push(students[i]);
  }

  return classes; // Fix: change to classes of not similar students
};

export const createClasses = async (req: Request, res: Response, next: NextFunction) => {
  const { students, classCapacity }: CalculateClassesProps = req.body;

  return res.send(calculate(students, classCapacity));
};