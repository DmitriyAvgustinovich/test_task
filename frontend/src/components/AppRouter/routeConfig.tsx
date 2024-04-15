import { RouteProps } from "react-router-dom";
import { ProfileCardsPage } from "../../pages/ProfileCardsPage";
import { RegisterPage } from "../../pages/RegisterPage";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  element: JSX.Element;
};

export enum AppRoutes {
  PROFILE_CARDS = "profile_cards",
  REGISTER = "register",
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.PROFILE_CARDS]: "/",
  [AppRoutes.REGISTER]: "/register",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.REGISTER]: {
    path: RouterPath.register,
    element: <RegisterPage />,
  },
  [AppRoutes.PROFILE_CARDS]: {
    path: RouterPath.profile_cards,
    element: <ProfileCardsPage />,
    authOnly: true,
  },
};
