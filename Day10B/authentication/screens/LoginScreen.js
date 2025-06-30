import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Login } from "../utils/helper";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View>
      <View>
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
          title="Login User"
          onPress={async () => {
            await Login(user.email, user.password, dispatch);
          }}
        />
        <View>
          <Text>
            New User?
            <Text
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
