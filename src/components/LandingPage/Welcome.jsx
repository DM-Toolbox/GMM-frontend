import {
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { useUser } from '../../context/UserContext';

import './Welcome.css';

export default function Welcome() {
  const user = useUser();
  const navigate = useNavigate();

  if (user) return <Navigate to="spells" />;

  return (
    <main className="welcome">
      <button
        className="signUpButton"
        alt="create new account"
        title="Create New Account"
        onClick={() => {
          navigate('signup');
        }}
      >
        get started
      </button>
      <button
        className="signInButton"
        alt="sign in"
        title="Sign In"
        onClick={() => {
          navigate('signin');
        }}
      >
        I already have an account
      </button>
      <Outlet />
    </main>
  );
}
