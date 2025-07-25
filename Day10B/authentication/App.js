import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./screens/RegisterScreen";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import LoginScreen from "./screens/LoginScreen";
import { iUserLoggedin, Logout } from "./utils/helper";
import { useEffect, useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import setIsUserAuthenticated from "./slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state) => state.authslice.isUserAuthenticated
  );

  async function getUser() {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/get-user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });
      const data = await response.json();
      console.log("✌️data from get user--->", data);
      if (data.token) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("Error Occured While Checking Authentication");
    }
  }

  useEffect(() => {
    async function getInfo() {
      const isUserLogin = await iUserLoggedin();
      dispatch(setIsUserAuthenticated(isUserLogin));
    }
    getInfo();
  }, []);

  function AuthenticatedNavigator() {
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
                    await Logout(dispatch);
                  }}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  function UnAuthenticatedNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <NavigationContainer>
        {authenticated ? (
          <AuthenticatedNavigator />
        ) : (
          <UnAuthenticatedNavigator />
        )}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
