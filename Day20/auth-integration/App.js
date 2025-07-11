import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import AuthProvider, { AuthContext } from "./context/authContext";
import { useContext } from "react";

const Stack = createStackNavigator();

function AuthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function UnAuthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const { isUserLoggedin, setIsUserLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isUserLoggedin ? (
        <AuthenticatedNavigator />
      ) : (
        <UnAuthenticatedNavigator />
      )}
    </NavigationContainer>
  );
}
