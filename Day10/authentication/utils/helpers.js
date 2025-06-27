import AsyncStorage from "@react-native-async-storage/async-storage";

export const Register = async (name, email, password) => {
  try {
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    console.log("User Registered");
  } catch (error) {
    console.log("Error Occured While Registering User");
  }
};

export const isUserLoggedin = async () => {
  try {
    const isLogin = await AsyncStorage.getItem("isLogin");
    console.log("✌️isLogin --->", isLogin);
    if (isLogin) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Error Occured WHile Checking the AUthentication");
    return error;
  }
};

export const Login = async (email, password) => {
  try {
    if (!email || !password) {
      console.log("Email or Passowrd not Provided");
    }
    const registerEmail = await AsyncStorage.getItem("email");
    const registeredPassword = await AsyncStorage.getItem("password");
    if (registerEmail == email && registeredPassword == password) {
      await AsyncStorage.setItem("isLogin", "true");
      console.log("User Logged In");
    }
  } catch (error) {
    console.log("Error Occured While Login");
  }
};

export const Logout = async () => {
  try {
    await AsyncStorage.removeItem("isLogin");
  } catch (error) {
    console.log("An Error Occured While Logging Out");
  }
};
