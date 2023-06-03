import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "../router";
import { selectIsLoggedIn } from "../redux/auth/auth.selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentlySignedIn } from "../redux/auth/auth.operations";

export const Main = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentlySignedIn());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Routes isAuth={isLoggedIn} />
    </NavigationContainer>
  );
};
