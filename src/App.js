import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import AboutPage from './components/AboutPage/AboutPage';
import LandingPage from './components/LandingPage/LandingPage';
import Layout from './components/PageLayout/Layout';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ProtectedRoute from './components/LandingPage/ProtectedRoutes';
import SignInForm from './components/LandingPage/SignInForm';
import SignUpForm from './components/LandingPage/SignUpForm';
import SpellList from './components/SpellListPage/SpellList';
import Auth from './components/LandingPage/Auth';
import SpellCompendium from './components/SpellCompendiumPage/SpellCompendium';
import ProfileForm from './components/ProfilePage/ProfileForm';

function App() {
  return (
    <Routes>
      <Route path="welcome" element={<LandingPage />}>
        <Route index element={<Auth />} />
        <Route path="signup" element={<SignUpForm />} />
        <Route path="signin" element={<SignInForm />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="spells" element={<SpellList />} />
          <Route
            path="compendium"
            element={<SpellCompendium />}
          />
          <Route path="profile" element={<ProfilePage />} />
          <Route
            path="profile/edit"
            element={<ProfileForm />}
          />

          <Route path="about" element={<AboutPage />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={<Navigate to="spells" replace />}
      />
    </Routes>
  );
}

export default App;
