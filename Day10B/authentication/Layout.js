import { View, Text } from "react-native";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const Layout = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Layout;
