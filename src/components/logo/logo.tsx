import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-routes';

export default function Logo(): JSX.Element {
  return (
    /*header__logo-link--active для main, чтобы не меняла внешний вид */
    <Link to={AppRoute.Root} className="header__logo-link">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}
