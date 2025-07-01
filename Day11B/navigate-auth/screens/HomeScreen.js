import { View, Text } from "react-native";
import React, { useContext } from "react";
import { UserDataContext } from "../context/userContext";

const HomeScreen = ({ route }) => {
  // const { getUser } = useContext(UserDataContext);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
