import { Routes, Route } from 'react-router-dom';
import Classes from './Classes';
import Students from './Students';
import GradeSettings from './GradeSettings';
import Shell from './Shell';
import RequireAuth from '../components/RequireAuth';

const ShellRoutes = () => (
  <Routes>
    <RequireAuth>
      <Route path='/' element={<Shell />}>
        <Route index element={<Students />} />
        <Route path='classes' element={<Classes />} />
        <Route path='grade-settings' element={<GradeSettings />} />
      </Route>
    </RequireAuth>
  </Routes>
);

export default ShellRoutes;