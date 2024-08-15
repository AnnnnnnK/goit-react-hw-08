import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const { name } = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p>{name}</p>;
    </div>
  );
};

export default UserMenu;
