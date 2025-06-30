import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../screens/CategoryScreen";
import DishesScreen from "../screens/DishesScreen";
import DishDetailScreen from "../screens/DishDetailScreen";

const AuthenticatedNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Dishes" component={DishesScreen} />
      <Stack.Screen name="DisheDetail" component={DishDetailScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
