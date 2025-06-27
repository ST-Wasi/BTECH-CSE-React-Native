import { View, Text, Pressable } from "react-native";
import React from "react";
import { useContext } from "react";
import { NewContext } from "../context/newContext";
import { useSelector, useDispatch } from "react-redux";
import { setCount, incrementCount, setName } from "../slices/counterSlice";

const SecondaryButton = () => {
  const count = useSelector((state) => state.counterslice.count);
  const name = useSelector((state) => state.counterslice.name);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>
        SecondaryButton {count} {name}
      </Text>
      <Pressable
        onPress={() => {
          dispatch(setCount(count + 20));
          dispatch(setName("Wasi"));
        }}
      >
        <Text>Increase</Text>
      </Pressable>
    </View>
  );
};

export default SecondaryButton;
