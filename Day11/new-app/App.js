import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthenticatedNavigator from "./CustomNavigator/AuthenticatedNavigator";
import UnAuthenticatedNavigator from "./CustomNavigator/UnAuthenticatedNavigator";
import UserContextProvier from "./context/userContext";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import { useSelector } from "react-redux";

export default function App() {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    console.log(isUserLoggedIn);
  }, [isUserLoggedIn]);

  if (loading) {
    return <Text>loading</Text>;  
  }
  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
        <AuthenticatedNavigator />
      ) : (
        <UnAuthenticatedNavigator />
      )}
    </NavigationContainer>
  );
}
