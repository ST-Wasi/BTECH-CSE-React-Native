import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const RegisterScreen = ({}) => {
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
          title="Register User"
          onPress={() => {
            console.log({ email, password });
          }}
        />
        <Text
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Already a User ? Login
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
