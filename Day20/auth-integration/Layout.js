import App from "./App";
import AuthProvider from "./context/authContext";

const Layout = () => {
  return (
    <AuthProvider>
      <App />;
    </AuthProvider>
  );
};

export default Layout;
