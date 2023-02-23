import { NavLink } from 'react-router-dom';
import { GiScrollQuill } from 'react-icons/gi';
import { GiBookshelf } from 'react-icons/gi';
import { FaUserEdit } from 'react-icons/fa';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="spells" alt="home" title="Spell List">
        <GiScrollQuill />
      </NavLink>
      <NavLink
        to="compendium"
        alt="compendium"
        title="Spell Compendium"
      >
        <GiBookshelf />
      </NavLink>
      <NavLink to="profile" alt="profile" title="profile">
        <FaUserEdit />
      </NavLink>
      <NavLink to="about" alt="about" title="about">
        <BsFillInfoCircleFill />
      </NavLink>
    </nav>
  );
}
