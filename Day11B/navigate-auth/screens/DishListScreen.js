import { View, Text, Image } from "react-native";
import React from "react";
import { MEALS } from "../utils/data/dummy-data";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = MEALS.filter((item) => {
    console.log(item.categories.indexOf(route.params.categoryId));
    return item.categories.indexOf(route.params.categoryId) < 0;
  });

  return (
    <View>
      <View style={{ padding: 20 }}>
        {data.map((item, index) => (
          <Pressable
            style={{
              flexDirection: "row",
              gap: 18,
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "dotted",
              elevation: 2,
              marginBottom: 20,
              borderRadius: 10,
              padding: 10,
              paddingVertical: 18,
            }}
            onPress={() => {
              navigation.navigate("DishDetail", {
                id: item.id,
              });
            }}
          >
            {console.log(item.imageUrl)}
            <Image
              style={{ backgroundColor: "blue", width: 50, height: 50 }}
              source={{ uri: item.imageUrl }}
              alt="Hello world"
            />
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {" "}
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default DishListScreen;
