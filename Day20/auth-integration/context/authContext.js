import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);

  let value = {
    isUserLoggedin,
    setIsUserLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
