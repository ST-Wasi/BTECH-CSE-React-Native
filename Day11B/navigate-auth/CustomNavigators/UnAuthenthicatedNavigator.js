import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const UnAuthenthicatedNavigator = ({
  setUserAuthenticated,
  userAuthenticated,
  getUser,
}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ setUserAuthenticated, userAuthenticated, getUser }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthenthicatedNavigator;
