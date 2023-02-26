import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';
import { useForm } from '../Forms/useForm';
import './SignInUp.css';

export default function SignInForm() {
  const navigate = useNavigate();
  const { signIn, error } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    username: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn(credentials);
  };

  return (
    <>
      <form className="signInForm" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
        />

        <span>---or---</span>

        <input
          placeholder="Username"
          name="username"
          type="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          required
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Submit</button>
        <p className="error">{error}</p>
      </form>
      <button
        onClick={() => {
          navigate('/welcome');
        }}
      >
        Back
      </button>
    </>
  );
}
