import LoginControl from '../login-control/login-control';
import User from '../user/user';

export default function HeaderNav(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <User />
        <LoginControl/>
      </ul>
    </nav>
  );
}
