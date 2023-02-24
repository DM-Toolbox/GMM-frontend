import { NavLink } from 'react-router-dom';
import { GiScrollQuill } from 'react-icons/gi';
import { GiBookshelf } from 'react-icons/gi';
import { FaUserEdit } from 'react-icons/fa';
import { TiInfoLarge } from 'react-icons/ti';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="spell-list"
        alt="home"
        title="Spell List"
      >
        <GiScrollQuill />
      </NavLink>
      <NavLink
        to="spell-compendium"
        alt="compendium"
        title="Spell Compendium"
      >
        <GiBookshelf />
      </NavLink>
      <NavLink to="profile" alt="profile" title="profile">
        <FaUserEdit />
      </NavLink>
      <NavLink to="about" alt="about" title="about">
        <TiInfoLarge />
      </NavLink>
    </nav>
  );
}
