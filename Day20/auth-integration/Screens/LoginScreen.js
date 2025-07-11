import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import { Register } from "../api/auth";
import { AuthContext } from "../context/authContext";

const LoginScreen = () => {
  const { setRole } = useContext(AuthContext);
  return (
    <View>
      <Button
        title="Login"
        onPress={async () => {
          const response = await Register(
            "muskan@muskan.com",
            "Wasi@1234",
            "Nuksaan",
            setRole
          );
          console.log("✌️response --->", response);
        }}
      />
    </View>
  );
};

export default LoginScreen;
