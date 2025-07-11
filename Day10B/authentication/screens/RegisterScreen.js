import { View, Text, TextInput, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Register } from "../utils/helper";

const RegisterScreen = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <TextInput
          placeholder="Name"
          onChangeText={(text) => {
            setUser({ ...user, name: text });
          }}
        />
        <TextInput
          placeholder="Email"
          inputMode="email"
          onChangeText={(email) => {
            setUser({ ...user, email: email });
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => {
            setUser({
              ...user,
              password: password,
            });
          }}
        />
        <Button
          title="Register User"
          onPress={async () => {
            await Register(user.name, user.email, user.password);
            // navigation.navigate("Login");
          }}
        />
        <View>
          <Text>
            Already User?
            <Text
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
