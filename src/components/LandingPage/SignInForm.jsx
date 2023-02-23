import { useAuth } from '../../context/UserContext';
import { InputControl } from '../Forms/FormControls';
import { useForm } from '../Forms/useForm';
import './SignInUp.css';

export default function SignInForm() {
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
    <form className="signInForm" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <InputControl
        placeholder="Email"
        name="email"
        type="email"
        // required
        value={credentials.email}
        onChange={handleChange}
      />
      <span>---or---</span>
      <InputControl
        placeholder="Username"
        name="username"
        type="username"
        // required
        value={credentials.username}
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
