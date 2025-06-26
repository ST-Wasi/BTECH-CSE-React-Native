import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const AboutScreen = ({}) => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      {/* <Text>Procust ID: {route.params.productId}</Text>
      <Text>Procust ID: {route.params.name}</Text> */}
    </View>
  );
};

export default AboutScreen;
