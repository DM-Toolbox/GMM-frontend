import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';
import { useForm } from '../Forms/useForm';
import './SignInUp.css';

export default function SignUpForm() {
  const navigate = useNavigate();
  const { signUp, error } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signUp(credentials);
    navigate('/profile/edit');
  };

  return (
    <>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h2>Create an account</h2>

        <input
          placeholder="Email"
          name="email"
          type="email"
          required
          value={credentials.email}
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
