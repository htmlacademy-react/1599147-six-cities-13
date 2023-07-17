import { Navigate } from 'react-router-dom';
import { AuthStatus, AuthStatusType } from '../../constants/auth-status';
import { AppRoute } from '../../constants/app-routes';
import { PropsWithChildren, ReactNode } from 'react';

type PrivateRouteProps = PropsWithChildren<{
  authStatus: AuthStatusType;
}>

export default function PrivateRoute(props: PrivateRouteProps): ReactNode {
  const { authStatus, children } = props;

  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to={ `${AppRoute.Root}${AppRoute.Login}` } />
  );

}

