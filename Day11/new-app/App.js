import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthenticatedNavigator from "./CustomNavigator/AuthenticatedNavigator";
import UnAuthenticatedNavigator from "./CustomNavigator/UnAuthenticatedNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isUserLoggedIn, setIsUSerLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  async function getUser() {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setIsUSerLoggedIn(true);
      }
    } catch (error) {
      console.log("Error Occured While Checkig User");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Text>loading</Text>;
  }
  return (
    <NavigationContainer>
      {isUserLoggedIn ? (
        <AuthenticatedNavigator
          isUserLoggedIn={isUserLoggedIn}
          setIsUSerLoggedIn={setIsUSerLoggedIn}
          getUser={getUser}
        />
      ) : (
        <UnAuthenticatedNavigator
          isUserLoggedIn={isUserLoggedIn}
          setIsUSerLoggedIn={setIsUSerLoggedIn}
          getUser={getUser}
        />
      )}
    </NavigationContainer>
  );
}
