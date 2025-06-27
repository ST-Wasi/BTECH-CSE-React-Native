import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const Login = async (email, password) => {
  try {
    if (!email || !password) {
      console.log("Email or Passoword Not Found");
      return;
    }
    let registeredEmail = await AsyncStorage.getItem("email");
    let registeredPassword = await AsyncStorage.getItem("password");
    if (password == registeredPassword && email == registeredEmail) {
      await AsyncStorage.setItem("isLogin", "true");
      console.log("User Logged In");
    }
  } catch (error) {
    console.log("Error Occures While Login");
  }
};
