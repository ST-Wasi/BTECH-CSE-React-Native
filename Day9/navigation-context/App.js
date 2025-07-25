import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "yellow",
            headerRight: ({ tintColor }) => {
              return (
                <View>
                  <Text style={{ color: tintColor }}>Hello world</Text>
                </View>
              );
            },
            drawerActiveTintColor: "yellow",
            drawerActiveBackgroundColor: "red",
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Anything",
            }}
          />
          <Drawer.Screen name="Category" component={CategoryScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
