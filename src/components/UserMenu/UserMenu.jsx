import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p className={css.text}>Hello, {name}</p>
      <button
        onClick={() => {
          dispatch(logout());
          toast.success(`You've successfully logged out.
           See you next time`);
        }}
        className={css.btn}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
