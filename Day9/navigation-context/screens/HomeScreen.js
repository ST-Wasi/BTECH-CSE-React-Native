import { View, Text, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useContext } from "react";
import { GlobalContext } from "../context/newContext";
import { useSelector, useDispatch } from "react-redux";
import { incrementValue } from "../slices/newSlice";

const HomeScreen = ({ navigation }) => {
  const count = useSelector((state) => state.newslice.value);
  const dispatch = useDispatch();
  console.log("✌️count --->", count);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable
        onPress={() => {
          dispatch(incrementValue());
        }}
      >
        <Text>Navigate {count}</Text>
      </Pressable>
      <PrimaryButton />
    </View>
  );
};

export default HomeScreen;
