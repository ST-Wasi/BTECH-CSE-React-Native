import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewProvider from "./context/newContext";
import SecondaryButton from "./components/SecondaryButton";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <SecondaryButton />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
