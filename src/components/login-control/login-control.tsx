import { Link } from 'react-router-dom';

export default function LoginControl(): JSX.Element {
  return (
    <Link to='/login' className="header__nav-link" >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}
