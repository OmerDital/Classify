import login from './Login';
import register from './Register';

const base = {
  authRequired: false,
};

const routes = [login, register].map(x => ({ ...x, ...base }));

export default routes;
