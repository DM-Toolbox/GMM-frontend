import { useUserInfo } from '../../context/UserContext';
import './UserInfo.css';

export default function UserInfo() {
  const { userInfo } = useUserInfo();

  return (
    <div className="userCard">
      <div className="info">
        <p>{userInfo.username}</p>
        <p>{userInfo.charName}</p>
        <p>{userInfo.charClass}</p>
        <p>Caster Level: {userInfo.casterLvl}</p>
      </div>
      {/* //TODO sort out avatar stuff */}
      {userInfo.avatar && <img alt="user avatar" src="" />}
    </div>
  );
}
