import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
