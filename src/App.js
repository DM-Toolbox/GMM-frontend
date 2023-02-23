import { Route, Routes } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import SignInForm from './components/LandingPage/SignInForm';
import SignUpForm from './components/LandingPage/SignUpForm';
import Welcome from './components/LandingPage/Welcome';

function App() {
  return (
    <Routes>
      <Route path="welcome" element={<LandingPage />}>
        <Route index element={<Welcome />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="signin" element={<SignInForm />} />
      </Route>
    </Routes>
  );
}

export default App;
