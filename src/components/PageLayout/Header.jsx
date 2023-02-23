import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useAuth,
  // useUser,
} from '../../context/UserContext';
import { getUserById } from '../../services/users';
import './Header.css';

export default function Header() {
  // const { userInfo } = useUser();
  const [userInfo, setUserInfo] = useState([]);

  const { signOut } = useAuth();
  const navigate = useNavigate();

  const fetchUserInfo = async () => {
    const results = await getUserById();
    setUserInfo(results.data);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('welcome', { replace: true });
  };

  return (
    <header>
      <div className="infoAndSignOut">
        <div className="userInfo">
          <p className="username">{userInfo.username}</p>
          <p className="username">{userInfo.charName}</p>
        </div>
        <button className="signOut" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <h2>Grimoire for the Modern Mage</h2>
    </header>
  );
}
