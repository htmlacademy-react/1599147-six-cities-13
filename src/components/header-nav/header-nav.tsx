import LoginControl from '../login-control/login-control';
import User from '../user/user';

export default function HeaderNav(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <User />
        </li>
        <li className="header__nav-item">
          <LoginControl />
        </li>
      </ul>
    </nav>
  );
}
