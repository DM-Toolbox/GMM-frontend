// import { Navigate, Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';
// import { useUser } from '../../context/UserContext';

export default function Layout() {
  // const { userInfo } = useUser();
  // const user = useUser();
  // if (!user) return <Navigate to="/" />;
  // console.log(userInfo);
  // if (!userInfo.username) return <Navigate to="profile" />;

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
