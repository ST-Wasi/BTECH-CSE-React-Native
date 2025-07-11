import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import setIsUserAuthenticated from "../slices/authSlice";
// console.log("✌️setIsUserAuthenticated --->", setIsUserAuthenticated);

export const Register = async (name, email, password) => {
  try {
    // await AsyncStorage.setItem("name", name);
    // await AsyncStorage.setItem("email", email);
    // await AsyncStorage.setItem("password", password);
    // console.log("User Registered");
    console.log(email, password);
    const response = await fetch(`http://localhost:8080/api/register`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("✌️data --->", data);
  } catch (error) {
    console.log("✌️error --->", error);
    console.log("Error Occured While Registering User");
  }
};

export const iUserLoggedin = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/get-user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: await AsyncStorage.getItem("token"),
      },
    });
    const data = await response.json();
    console.log("✌️data from get user--->", data);
    if (data.token) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error Occured While Checking Authentication");
  }
};

export const Logout = async () => {
  await AsyncStorage.removeItem("isLogin");
};

export const Login = async (
  email,
  password,
  dispatch,
  setIsUserAuthenticated
) => {
  try {
    if (!email || !password) {
      console.log("❌ Email or password is missing.");
      return;
    }

    const response = await fetch(`http://localhost:8080/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    await AsyncStorage.setItem("token", data.token);
    dispatch(setIsUserAuthenticated(true));
  } catch (error) {
    console.log("✌️error --->", error);
    console.log("🔥 Error during Firebase Login:", error);
  }
};
