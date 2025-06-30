import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const Register = async (name, email, password) => {
  try {
    // await AsyncStorage.setItem("name", name);
    // await AsyncStorage.setItem("email", email);
    // await AsyncStorage.setItem("password", password);
    // console.log("User Registered");
    console.log(process.env.EXPO_PUBLIC_FIREBASE_API);
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.EXPO_PUBLIC_FIREBASE_API}`,
      {
        method: "POST",
        body: {
          email,
          password,
          returnSecureToken: true,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("✌️data --->", data);
  } catch (error) {
    console.log("Error Occured While Registering User");
  }
};

export const iUserLoggedin = async () => {
  try {
    if (await AsyncStorage.getItem("isLogin")) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Error Occured While Checking Authentication");
  }
};

export const Logout = async () => {
  await AsyncStorage.removeItem("isLogin");
};

export const Login = async (email, password, dispatch) => {
  try {
    if (!email || !password) {
      console.log("❌ Email or password is missing.");
      return;
    }

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_FIREBASE_API}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      await AsyncStorage.setItem("isLogin", "true");
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("token", data.idToken);

      dispatch(setIsUserAuthenticated(true));
      console.log("✅ Firebase Login Successful:", data);
    } else {
      console.log("❌ Login failed:", data.error.message);
    }
  } catch (error) {
    console.log("🔥 Error during Firebase Login:", error);
  }
};
