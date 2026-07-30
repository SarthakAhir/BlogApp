import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { Button } from "../index";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <Button
      variant="outline"
      onClick={logoutHandler}
      className="px-5 py-2"
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;