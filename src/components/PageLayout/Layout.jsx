import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';
import { useUser } from '../../context/UserContext';

export default function Layout() {
  const user = useUser();
  console.log(user);
  if (!user) return <Navigate to="welcome" />;
  return (
    <div className="Layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
