import student from './model';

export const getAll = (req, res, next) => {
  student.find()
    .then(entities => {
      res.send(entities);
    }).catch(next);
};
