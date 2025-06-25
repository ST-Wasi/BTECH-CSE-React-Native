import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={FirstScreen}
          options={{
            title: "Anything",
            headerStyle: {
              backgroundColor: "purple",
            },
            headerTintColor: "yellow",
          }}
        />
        <Drawer.Screen name="About" component={SecondScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
