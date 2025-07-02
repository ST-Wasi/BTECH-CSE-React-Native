import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
  getMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { Alert } from "react-native";
import { useEffect } from "react";

export default function App() {
  async function getThings() {
    try {
      const result = await getCameraPermissionsAsync();
      if (!result.granted) {
        Alert.alert("Camera permission required");
      }
      await requestCameraPermissionsAsync();
      await getMediaLibraryPermissionsAsync();
    } catch (error) {
      console.log("Camera permission error");
    }
  }
  useEffect(() => {
    getThings();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
