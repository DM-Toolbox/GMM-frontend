import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './LandingPage.css';

export default function LandingPage() {
  const user = useUser();
  if (user) return <Navigate to="spell-list" />;

  return (
    <main className="landingPage">
      <h1>Grimoire for the Modern Mage</h1>
      <Outlet />
    </main>
  );
}
