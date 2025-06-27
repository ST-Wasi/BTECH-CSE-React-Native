import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { isUserLoggedin, Logout } from "./utils/helpers";
import { Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

function UnAuthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedNavigator({ setIsAuthenticated }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: () => {
            return (
              <Button
                title="Logout"
                onPress={async () => {
                  await Logout();
                  setIsAuthenticated(false);
                }}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isUserLoggedin();
      setIsAuthenticated(loggedIn);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null; // or a splash screen / loading spinner
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthenticatedNavigator setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <UnAuthenticatedNavigator setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}
