import { PropsWithChildren, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthStatus, AuthStatusType } from '../../constants/auth-status';
import { AppRoute, AppRouteType } from '../../constants/app-routes';

type PrivateRouteProps = PropsWithChildren<{
  criteria: AuthStatusType;
  param: AuthStatusType;
  routeTo: AppRouteType;
}>

export default function PrivateRoute(props: PrivateRouteProps): ReactNode {
  const { criteria = AuthStatus.Auth, param = AuthStatus.NoAuth, routeTo = AppRoute.Login, children } = props;

  return (
    param === criteria ? children : <Navigate to={routeTo} />
  );

}

