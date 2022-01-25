import Details from './Details';
import ParentsDetails from './ParentsDetails';
import Friends from './Friends';

const steps = [
  {
    label: 'פרטים',
    Component: () => <Details />
  },
  {
    label: 'פרטי הורים',
    Component: () => <ParentsDetails />
  },
  {
    label: 'בחירת חברים',
    Component: () => <Friends />
  }
];

export default steps;