import { View, Text, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../slices/userSlice";

const SecondaryButton = () => {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <View>
      <Text> Name: {name}</Text>
      <Button
        title="Change Name"
        onPress={() => {
          dispatch(setName("Wasi"));
        }}
      />
    </View>
  );
};

export default SecondaryButton;
