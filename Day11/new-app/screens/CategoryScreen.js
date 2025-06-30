import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;
