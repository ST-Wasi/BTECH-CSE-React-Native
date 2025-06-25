import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>FirstScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("About", {
            productID: "Chair",
            arr: [1, 2, 3, 4, 5, 6, 7, 7],
          });
        }}
      >
        <Text>Navigate to other screen </Text>
      </Pressable>
    </View>
  );
};

export default FirstScreen;
