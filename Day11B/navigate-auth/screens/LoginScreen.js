import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const LoginScreen = ({ route }) => {
  //   console.log(route.params);
  const { setUserAuthenticated, getUser } = route.params;
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
            // setUserAuthenticated(true);
            await AsyncStorage.setItem("token", "abcd");
            getUser();
          }}
        />
        <Text
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          New User ? Login
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
