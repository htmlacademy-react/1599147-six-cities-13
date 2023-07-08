import UserControl from '../user-control/user-control';
import User from '../user/user';

export default function HeaderNav(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <User />
        <UserControl/>
      </ul>
    </nav>
  );
}
