import { Button } from "antd";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { RouterPath } from "../AppRouter/routeConfig";
import { logout } from "../../store/features/userSlice";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <Link to={RouterPath.account}>
        <Button>Профиль</Button>
      </Link>

      <Link to={RouterPath.peoples}>
        <Button>Пользователи</Button>
      </Link>

      <Button type="dashed" onClick={() => dispatch(logout())}>
        Выход
      </Button>
    </div>
  );
};
