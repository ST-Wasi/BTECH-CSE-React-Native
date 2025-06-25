import { View, Text, Pressable } from "react-native";
import React from "react";

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        
        <Text>New Screen</Text>
      </Pressable>
      <Text>SecondScreen</Text>
    </View>
  );
};

export default SecondScreen;
