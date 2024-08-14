import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const { name } = useSelector(selectUser);

  return <p>{name}</p>;
};

export default UserMenu;
