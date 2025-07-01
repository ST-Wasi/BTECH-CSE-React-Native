import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

function UserContextProvier({ children }) {
  const [isUserLoggedIn, setIsUSerLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getUser() {
    try {
      setLoading(true);
      console.log("Get User Is Called");
      const token = await AsyncStorage.getItem("token");
      if (token) {
        console.log("Token Found");
        setIsUSerLoggedIn(true);
      } else {
        console.log("Token Not Found");
        setIsUSerLoggedIn(false);
      }
    } catch (error) {
      console.log("Error Occured While Checkig User");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  let value = {
    setIsUSerLoggedIn,
    isUserLoggedIn,
    loading,
    setLoading,
    getUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvier;
