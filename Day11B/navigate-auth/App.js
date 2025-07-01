import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import AuthenticatedNavigator from "./CustomNavigators/AuthenticatedNavigator";
import UnAuthenthicatedNavigator from "./CustomNavigators/UnAuthenthicatedNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserProvider, { UserDataContext } from "./context/userContext";

export default function App() {
  const { userAuthenticated, loading } = useContext(UserDataContext);
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userAuthenticated ? (
        <AuthenticatedNavigator />
      ) : (
        <UnAuthenthicatedNavigator />
      )}
    </NavigationContainer>
  );
}
