import { useUserInfo } from '../../context/UserContext';
import { updateUserInfo } from '../../services/users';
import { useForm } from '../Forms/useForm';
import './ProfileForm.css';

export default function ProfileForm() {
  const { userInfo } = useUserInfo();
  const [updatedInfo, handleChange] = useForm({
    username: '',
    charName: '',
    charClass: '',
    casterLvl: '',
    avatarUrl: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUserInfo(userInfo.id, updatedInfo);
  };

  return (
    <form
      className="editProfileForm"
      onSubmit={handleSubmit}
    >
      <input
        placeholder={userInfo.username}
        name="username"
        type="text"
        required={userInfo.username === null ? true : false}
        value={updatedInfo.username}
        onChange={handleChange}
      />

      <input
        placeholder={userInfo.charName}
        name="character name"
        type="text"
        required={userInfo.charName === null ? true : false}
        value={updatedInfo.charName}
        onChange={handleChange}
      />

      <select
        name="character class"
        required={
          userInfo.charClass === null ? true : false
        }
        value={updatedInfo.charClass}
        onChange={handleChange}
      >
        <option value="">
          {!userInfo.charClass
            ? 'Please choose one'
            : userInfo.charClass}
        </option>
        {/* //TODO decide if I should hardcode or map these bois */}
      </select>

      <select
        name="caster level"
        required={
          userInfo.casterLvl === null ? true : false
        }
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
  );
}
