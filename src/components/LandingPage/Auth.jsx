import {
  // Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

import './Auth.css';

export default function Auth() {
  // const user = useUser();
  const navigate = useNavigate();

  // if (user) return <Navigate to="spell-list" />;

  return (
    <main className="auth">
      <button
        className="signUpButton"
        alt="create new account"
        title="Create New Account"
        onClick={() => {
          navigate('sign-up');
        }}
      >
        get started
      </button>
      <button
        className="signInButton"
        alt="sign in"
        title="Sign In"
        onClick={() => {
          navigate('sign-in');
        }}
      >
        I already have an account
      </button>
      <Outlet />
    </main>
  );
}
