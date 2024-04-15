import { RouteProps } from "react-router-dom";
import { RegisterPage } from "../../pages/RegisterPage";
import { MainPage } from "../../pages/MainPage";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  element: JSX.Element;
};

export enum AppRoutes {
  MAIN = "main",
  REGISTER = "register",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.REGISTER]: "/register",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.REGISTER]: {
    path: RouterPath.register,
    element: <RegisterPage />,
  },
};
