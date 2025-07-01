import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext({});

function UserProvider({ children }) {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  async function getUser() {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setUserAuthenticated(true);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      console.log("Error Occured From Getting User");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  let value = {
    getUser,
    setUserAuthenticated,
    setLoading,
    loading,
    userAuthenticated,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserProvider;
