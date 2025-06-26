import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PrimaryButton = ({}) => {
  const navigation = useNavigation();
  console.log("✌️navigation from Primary Button --->", navigation);
  return (
    <View>
      <Text>PrimaryButton</Text>
    </View>
  );
};

export default PrimaryButton;
