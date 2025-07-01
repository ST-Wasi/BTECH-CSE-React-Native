import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const RegisterScreen = ({}) => {
  const [email, setEmail] = useState("");
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  // const { isUserLoggedIn, setIsUSerLoggedIn, loading, setLoading, getUser } =
  //   useContext(UserContext);
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
