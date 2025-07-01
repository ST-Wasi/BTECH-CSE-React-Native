import { View, Text, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../context/userContext";
import { useDispatch } from "react-redux";
import { getUser, setIsUSerLoggedIn, setLoading } from "../slices/userSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  // const { setIsUSerLoggedIn, getUser } = route.params;
  async function getUser() {
    try {
      dispatch(setLoading(true));
      console.log("Get User Is Called");
      const token = await AsyncStorage.getItem("token");
      if (token) {
        console.log("Token Found");
        dispatch(setIsUSerLoggedIn(true));
      } else {
        console.log("Token Not Found");
        dispatch(setIsUSerLoggedIn(false));
      }
    } catch (error) {
      console.log("✌️error --->", error);
      console.log("Error Occured While Checkig User");
    } finally {
      dispatch(setLoading(false));
    }
  }
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
            dispatch(await getUser());
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
