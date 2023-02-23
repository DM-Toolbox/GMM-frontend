import {
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { useUser } from '../../context/UserContext';

import './Welcome.css';

export default function Welcome() {
  const user = useUser();
  if (user) return <Navigate to="/" />;

  const navigate = useNavigate();

  const signUpRedirect = () => {
    navigate('signup');
  };

  const signInRedirect = () => {
    navigate('signin');
  };

  return (
    <main className="welcome">
      <button
        className="signUpButton"
        alt="create new account"
        title="Create New Account"
        onClick={signUpRedirect}
      >
        get started
      </button>
      <button
        className="signInButton"
        alt="sign in"
        title="Sign In"
        onClick={signInRedirect}
      >
        I already have an account
      </button>
      <Outlet />
    </main>
  );
}
