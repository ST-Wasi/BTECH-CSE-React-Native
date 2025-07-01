import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DishListScreen from "../screens/DishListScreen";
import { UserDataContext } from "../context/userContext";
import DishDetail from "../screens/DishDetail";

const AuthenticatedNavigator = ({}) => {
  const Stack = createStackNavigator();
  const { getUser } = useContext(UserDataContext);
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
      <Stack.Screen name="DishDetail" component={DishDetail} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
