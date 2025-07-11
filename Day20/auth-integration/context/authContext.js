import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);
  const [role, setRole] = useState("buyer");

  let value = {
    isUserLoggedin,
    setIsUserLoggedIn,
    role,
    setRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
