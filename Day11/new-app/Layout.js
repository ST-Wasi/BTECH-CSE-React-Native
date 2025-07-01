import App from "./App";
import UserContextProvier from "./context/userContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Layout = () => {
  return (
    <Provider store={store}>
      <App />;
    </Provider>
  );
};

export default Layout;
