import { AppRouter } from "./components/AppRouter/AppRouter";

export const App = () => {
  // const dispatch = useDispatch();
  // const inited = useSelector(getUserInited);
  const inited = true;

  // React.useEffect(() => {
  //   dispatch(userActions.initAuthData());
  // }, [dispatch]);

  return <>{inited && <AppRouter />}</>;
};
