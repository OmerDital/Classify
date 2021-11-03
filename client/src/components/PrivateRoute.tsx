import { Redirect, Route } from 'react-router-dom';
import { RouteProps } from 'react-router/ts4.0';
import { FC } from 'react';
import { useAuth } from '../hooks';

interface PrivateRouteProps {
  authRequired: boolean
  rest?: any[]
  component: FC<RouteProps>
}

const PrivateRoute = ({ component: Component, authRequired, ...rest }: PrivateRouteProps) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props: RouteProps) => ((authRequired && user) || !authRequired ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}
        />
      ))}
    />
  );
};

PrivateRoute.defaultProps = {
  rest: [],
};

export default PrivateRoute;
