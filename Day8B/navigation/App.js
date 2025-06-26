import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import GlobalProvider from "./context/globalContext";

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "purple",
            },
            headerTintColor: "yellow",
            headerRight: ({ tintColor }) => {
              return (
                <View style={{ marginRight: 10 }}>
                  <Text style={{ color: tintColor }}>Something</Text>
                </View>
              );
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Anything",
            }}
          />
          <Drawer.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: "About Screen",
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
