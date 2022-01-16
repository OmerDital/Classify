import { Routes, Route, useLocation } from 'react-router-dom';
import Classes from './Classes';
import Students from './Students';
import Shell from './Shell';
import RequireAuth from '../components/RequireAuth';
import StudentInfoDialog from './Students/StudentInfoDialog';
import SpecificClass from './Classes/Class';

const ShellRoutes = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <RequireAuth>
          <Route path='/' element={<Shell />}>
            <Route index element={<Students />} />
            <Route path='classes' element={<Classes />} />
            <Route path='classes/:classId' element={<SpecificClass />} />
          </Route>
        </RequireAuth>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <RequireAuth>
            <Route path='/students/:id' element={<StudentInfoDialog open />} />
          </RequireAuth>
        </Routes>
      )}
    </>
  );
};

export default ShellRoutes;