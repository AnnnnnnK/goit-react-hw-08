import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.container}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
