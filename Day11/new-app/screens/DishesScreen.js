import { View, Text } from "react-native";
import React from "react";
import { MEALS } from "../utils/dummy-data";

const DishesScreen = ({ route }) => {
  const filteredData = MEALS.filter((item) => {
    return item.categories.indexOf(route.params.categoryId) < 0;
  });
  console.log("✌️filteredData --->", filteredData);
  return (
    <View>
      <Text>DishesScreen {route.params.categoryId}</Text>
    </View>
  );
};

export default DishesScreen;
