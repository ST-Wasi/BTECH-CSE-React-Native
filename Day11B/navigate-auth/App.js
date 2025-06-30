import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AuthenticatedNavigator from "./CustomNavigators/AuthenticatedNavigator";
import UnAuthenthicatedNavigator from "./CustomNavigators/UnAuthenthicatedNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  async function getUser() {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setUserAuthenticated(true);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error Occured From Getting User");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

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
        <AuthenticatedNavigator
          userAuthenticated={userAuthenticated}
          setUserAuthenticated={setUserAuthenticated}
          getUser={getUser}
        />
      ) : (
        <UnAuthenthicatedNavigator
          userAuthenticated={userAuthenticated}
          setUserAuthenticated={setUserAuthenticated}
          getUser={getUser}
        />
      )}
    </NavigationContainer>
  );
}
