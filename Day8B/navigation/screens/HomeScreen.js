import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const HomeScreen = ({}) => {
  const navigation = useNavigation();
  const something = useContext(GlobalContext);
  console.log("✌️something --->", something.generateRandomNumber());
  //   console.log(
  //     "✌️generateRandomNumber --->",
  //     generateRandomNumber && generateRandomNumber()
  //   );
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("About", {
            productId: "Chair",
            name: "Wasi",
          });
        }}
        style={{
          justifyContent: "center",
          backgroundColor: "#ccc",
          padding: 16,
        }}
      >
        <Text style={{ color: "black" }}>Navigate Button</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
