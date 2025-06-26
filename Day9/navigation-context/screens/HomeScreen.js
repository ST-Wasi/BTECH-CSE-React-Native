import { View, Text, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const HomeScreen = ({ navigation }) => {
  console.log("✌️navigation --->", navigation);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Category", {
            name: "Wasi",
            age: 0,
          });
        }}
      >
        <Text>Navigate</Text>
      </Pressable>
      <PrimaryButton />
    </View>
  );
};

export default HomeScreen;
