import { View, Text, Button } from "react-native";
import React from "react";
import { Register } from "../api/auth";

const LoginScreen = () => {
  return (
    <View>
      <Button
        title="Login"
        onPress={async () => {
          const response = await Register(
            "muskan@muskan.com",
            "Wasi@1234",
            "Nuksaan"
          );
          console.log("✌️response --->", response);
        }}
      />
    </View>
  );
};

export default LoginScreen;
