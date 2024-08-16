import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

const HomePage = () => {
  return <WelcomeMessage />;
};

export default HomePage;
