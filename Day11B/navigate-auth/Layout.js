import { View, Text } from "react-native";
import App from "./App";
import UserProvider from "./context/userContext";

const Layout = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default Layout;
