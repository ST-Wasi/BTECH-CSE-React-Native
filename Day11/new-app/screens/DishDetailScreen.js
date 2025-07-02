import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { MEALS } from "../utils/dummy-data";
import UnOrderedList from "../components/UnOrderedList";

const DishDetailScreen = ({ route }) => {
  const meal = MEALS.find((item) => item.id == route.params.mealId);
  console.log("✌️meal --->", meal);
  return (
    <View style={{ height: "100%" }}>
      <View style={{ height: "100%", padding: 20 }}>
        <Image
          style={{ width: "100%", height: "40%" }}
          source={{ uri: meal.imageUrl }}
        />
        <Text>{meal.title}</Text>
      </View>
    </View>
  );
};

export default DishDetailScreen;
