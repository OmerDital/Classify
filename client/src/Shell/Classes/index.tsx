import NoClasses from './NoClasses';
import ClassesList from './ClassesList';

const Classes = () => {
  // TODO: fetch classes
  const classes = [{ _id: '1', number: 1, students: [] }];

  return classes ? <ClassesList classes={classes} /> : <NoClasses />;
};

export default Classes;