import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const HomeScreen = ({}) => {
  const { doSomething, count, setCount } = useContext(GlobalContext);
  if (doSomething) {
    doSomething();
    console.log(count);
  }
  return (
    <View>
      {<Text>HomeScreen {count}</Text>}
      <Pressable
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text>Increase</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
