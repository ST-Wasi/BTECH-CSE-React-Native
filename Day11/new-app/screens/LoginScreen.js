import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const route = useRoute();
  const { setIsUSerLoggedIn, getUser } = route.params;
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  return (
    <View>
      <View>
        <TextInput
          placeholder="Enter Youe Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          placeholder="Enter Youe Password"
          onChangeText={(pass) => setPassword(pass)}
          secureTextEntry={true}
        />
        <Button
          title="Login User"
          onPress={async () => {
            console.log({ email, password });
            await AsyncStorage.setItem("token", "abcd");
            getUser();
          }}
        />
        <Text
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          New User ? Register
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
