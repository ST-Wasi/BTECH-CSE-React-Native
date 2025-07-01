import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

function UnAuthenticatedNavigator({
  setIsUSerLoggedIn,
  isUserLoggedIns,
  getUser,
}) {
  const Stack = createStackNavigator();
  // Login
  // Register
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

export default UnAuthenticatedNavigator;
