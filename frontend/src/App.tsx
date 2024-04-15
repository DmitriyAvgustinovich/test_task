import React from "react";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { useGetMeQuery } from "./store/api/authApi";
import { useSelector } from "react-redux";
import { selectUser } from "./store/features/userSlice";

export const App = () => {
  const { data: userData, isLoading, isError } = useGetMeQuery(null);
  const user = useSelector(selectUser);

  console.log(userData);
  console.log(user);
  
  React.useEffect(() => {
    if ((!user && !isLoading) || isError) {
      // Redirect to login page
    }
  }, [user, isLoading, isError]);

  const inited = true;

  return <>{inited && <AppRouter />}</>;
};
