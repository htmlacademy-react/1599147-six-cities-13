import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-routes';

export default function LoginControl(): JSX.Element {
  return (
    <Link to={AppRoute.Login} className="header__nav-link" >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}
