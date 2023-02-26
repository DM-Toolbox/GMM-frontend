import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '../../context/UserContext';
import { updateUserInfo } from '../../services/users';
import { useForm } from '../Forms/useForm';
import './ProfileForm.css';

export default function ProfileForm() {
  const navigate = useNavigate();
  const { userInfo, fetchUserInfo } = useUserInfo();
  const [updatedInfo, handleChange] = useForm({
    // adding a defined value to initial undefined state to avoid "uncontrolled to controlled input error"
    username: userInfo.username || '',
    charName: userInfo.charName || '',
    charClass: userInfo.charClass || '',
    casterLvl: userInfo.casterLvl || '',
    // avatarUrl: '',
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUserInfo(userInfo.id, { updatedInfo });
    await fetchUserInfo();
    navigate('/spell-compendium');
  };

  return (
    <>
      <form
        className="editProfileForm"
        onSubmit={handleSubmit}
      >
        <input
          placeholder={userInfo.username}
          name="username"
          type="text"
          required={!userInfo.username ? true : false}
          value={updatedInfo.username}
          onChange={handleChange}
        />

        <input
          placeholder={userInfo.charName}
          name="charName"
          type="text"
          required={!userInfo.charName ? true : false}
          value={updatedInfo.charName}
          onChange={handleChange}
        />

        <select
          name="charClass"
          required={!userInfo.charClass ? true : false}
          value={updatedInfo.charClass}
          onChange={handleChange}
        >
          <option value="">
            {!userInfo.charClass
              ? 'Please choose one'
              : userInfo.charClass}
          </option>
          {/* //TODO decide if I should hardcode or map these bois */}
          <option value="Artificer">Artificer</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>

        <select
          name="casterLvl"
          required={!userInfo.casterLvl ? true : false}
          value={updatedInfo.casterLvl}
          onChange={handleChange}
        >
          <option value="">
            {!userInfo.casterLvl
              ? 'Please choose one'
              : userInfo.casterLvl}
          </option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>

        <button>Submit</button>
      </form>
      <button
        onClick={() => {
          navigate('/profile');
        }}
      >
        Back
      </button>
    </>
  );
}
