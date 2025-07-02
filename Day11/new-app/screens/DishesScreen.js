import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { MEALS } from "../utils/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const DishesScreen = ({ route }) => {
  const navigation = useNavigation();
  const filteredData = MEALS.filter((item) => {
    return item.categories.includes(route.params.categoryId);
  });
  return (
    <View>
      <View style={styles.mainContainer}>
        {filteredData.map((item, index) => {
          return (
            <Pressable
              style={styles.listItem}
              onPress={() => {
                navigation.navigate("DisheDetail", {
                  mealId: item.id,
                });
              }}
            >
              <Image
                style={styles.imageStyle}
                source={{ uri: item.imageUrl }}
                alt={item.title}
              />
              <Text> {item.title}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default DishesScreen;

const styles = StyleSheet.create({
  mainContainer: { padding: 28, gap: 10 },
  listItem: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    elevation: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  imageStyle: { width: 50, height: 50 },
});
