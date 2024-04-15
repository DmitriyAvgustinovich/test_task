import { RouterPath } from "./routeConfig";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

export function RequireAuth(props: RequireAuthProps) {
  const { children } = props;

  // const auth = useSelector(getUserAuthData);
  const auth = true;
  if (!auth)  return <Navigate to={RouterPath.main} />;

  return children;
}
