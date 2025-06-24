import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import * as Location from "expo-location";
import NewComponent from "./components/NewComponent";
import GlobalInput from "./components/GlobalInput";

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working iaugsdiyg on your app!</Text> */}
      <Pressable
      >
        <Text>Hello Weather</Text>
        <NewComponent />
        <GlobalInput />
      </Pressable>
      <StatusBar style="auto" />
    </View>
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
