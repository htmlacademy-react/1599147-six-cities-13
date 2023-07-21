import { PropsWithChildren, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthStatus, AuthStatusType } from '../../constants/auth-status';
import { AppRoute } from '../../constants/app-routes';

type PrivateRouteProps = PropsWithChildren<{
  authStatus: AuthStatusType;
}>

export default function PrivateRoute(props: PrivateRouteProps): ReactNode {
  const { authStatus, children } = props;

  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to={ AppRoute.Login} />
  );

}

