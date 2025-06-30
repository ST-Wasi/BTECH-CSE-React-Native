import { View, Text, Image } from "react-native";
import React from "react";
import { MEALS } from "../utils/data/dummy-data";

const DishListScreen = ({ route }) => {
  const data = MEALS.filter((item) => {
    return item.categories.indexOf(route.params.categoryId) < 0;
  });

  return (
    <View>
      <View>
        {data.map((item, index) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.subcat}</Text>
            <Image source={{ uri: item.image }} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default DishListScreen;
