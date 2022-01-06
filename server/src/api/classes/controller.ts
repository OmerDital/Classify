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

const getSimilarStudentsGroups = (kmeansIndexes: number[], students: Student[]) => {
  const similarStudents: Student[][] = [];
  // Gender and friends are not calculated here
  for (let i = 0; i < kmeansIndexes.length; i++) {
    const studentsIndex = kmeansIndexes[i];
    if (!similarStudents[studentsIndex]) {
      similarStudents[studentsIndex] = [];
    }

    similarStudents[studentsIndex].push(students[i]);
  }

  return similarStudents;
};

/**
 * Take every student from a group and spread them in the classes as equally as possible
 * @param similarStudents - groups of similar attributes students
 * @param numOfClasses
 */
const createHeterogeneousClasses = (similarStudents: Student[][], numOfClasses: number) => {
  const classes: Student[][] = []; //TODO: use reduce

  similarStudents.forEach((studentsGroup => {
    studentsGroup.forEach((student, index) => {
      if (!classes[index % numOfClasses]) {
        classes[index % numOfClasses] = [];
      }

      classes[index % numOfClasses].push(student);
    });
  }));

  return classes;
};

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
  const similarStudents = getSimilarStudentsGroups(simillarGroups.indexes, students);

  return createHeterogeneousClasses(similarStudents, numOfClasses);
};

export const createClasses = async (req: Request, res: Response, next: NextFunction) => {
  const { students, classCapacity }: CalculateClassesProps = req.body;

  return res.send(calculate(students, classCapacity));
};