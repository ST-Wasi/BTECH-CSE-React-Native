import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/CategoryScreen";
import DishesScreen from "../screens/DishesScreen";
import DishDetailScreen from "../screens/DishDetailScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../slices/userSlice";

const AuthenticatedNavigator = ({}) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <MaterialIcons
              style={{
                marginRight: 10,
              }}
              onPress={async () => {
                if (getUser) {
                  await AsyncStorage.removeItem("token");

                  dispatch(getUser());
                }
              }}
              name="logout"
              size={24}
              color="black"
            />
          );
        },
      }}
    >
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="DishList" component={DishesScreen} />
      <Stack.Screen name="DisheDetail" component={DishDetailScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
