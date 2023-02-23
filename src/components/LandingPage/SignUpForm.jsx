import { useAuth } from '../../context/UserContext';
import { InputControl } from '../Forms/FormControls';
import { useForm } from '../Forms/useForm';
import './SignInUp.css';

export default function SignUpForm() {
  const { signUp, error } = useAuth();
  const [credentials, handleChange] = useForm({
    email: '',
    // username: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signUp(credentials);
  };

  return (
    <form className="signUpForm" onSubmit={handleSubmit}>
      <h2>Create an account</h2>

      {/* <InputControl
        placeholder="Username"
        name="username"
        type="username"
        required
        value={credentials.username}
        onChange={handleChange}
      /> */}

      <InputControl
        placeholder="Email"
        name="email"
        type="email"
        required
        value={credentials.email}
        onChange={handleChange}
      />

      <InputControl
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
  );
}
