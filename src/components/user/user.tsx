import { Link } from 'react-router-dom';

export default function User(): JSX.Element {
  return (
    <Link to='/login' className="header__nav-link header__nav-link--profile" >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
      <span className="header__favorite-count">3</span>
    </Link>
  );
}
