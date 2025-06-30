import { View, Text, Pressable } from "react-native";
import React, { use } from "react";
import { CATEGORIES } from "../utils/data/dummy-data";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          padding: 20,
          gap: 15,
          justifyContent: "center",
          alignItems: "center",
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
                navigation.navigate("DishList",{
                    categoryId: item.id
                })
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
