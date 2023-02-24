import {
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import { useUser } from '../../context/UserContext';

import './Auth.css';

export default function Auth() {
  const user = useUser();
  const navigate = useNavigate();

  if (user) return <Navigate to="spells" />;

  return (
    <main className="auth">
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
