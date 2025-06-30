import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DishListScreen from "../screens/DishListScreen";

const AuthenticatedNavigator = ({
  getUser,
  userAuthenticated,
  setUserAuthenticated,
}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ getUser }}
        options={{
          headerRight: () => {
            return (
              <View style={{ marginRight: 10 }}>
                <MaterialCommunityIcons
                  name="logout-variant"
                  size={24}
                  color="black"
                  onPress={async () => {
                    await AsyncStorage.removeItem("token");
                    getUser();
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="DishList" component={DishListScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
