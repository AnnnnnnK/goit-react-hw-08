import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h2>Welcome to a phonebook app</h2>
    </div>
  );
};

export default HomePage;
