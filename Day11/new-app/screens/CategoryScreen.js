import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CATEGORIES } from "../utils/dummy-data";

const CategoryScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          padding: 10,
        }}
      >
        {CATEGORIES.map((item, index) => (
          <Pressable
            key={index}
            style={{
              backgroundColor: item.color,
              padding: 40,
              borderRadius: 12,
              width: 170,
            }}
            onPress={() => {
              navigation.navigate("DishList", {
                categoryId: item.id,
              });
            }}
          >
            <Text style={{ color: "black", textWrap: "wrap" }}>
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default CategoryScreen;
