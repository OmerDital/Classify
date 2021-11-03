import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Providers from './providers';
import PrivateRoute from './components/PrivateRoute';
import exteriorRoutes from './Exterior/routes';
import NotFound from './components/NotFound';

const routes = [...exteriorRoutes];

const App = () => (
  <BrowserRouter>
    <Providers>
      <Switch>
        {routes.map(route => (
          <PrivateRoute key={route.name} {...route} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Providers>
  </BrowserRouter>
);

export default App;
