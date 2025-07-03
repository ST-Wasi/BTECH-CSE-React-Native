import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import { Alert } from "react-native";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    let isMounted = true;
    const subscription = Notifications.addNotificationReceivedListener(
      (response) => {
        console.log(response);
      }
    );
    const subscription2 = Notifications.addNotificationResponseClearedListener(
      (response) => {
        console.log("✌️response  of clear--->", response);
        
      }
    );
    console.log("✌️subscription --->", subscription);

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);

  async function shecduleNotification() {
    try {
      const response = await Notifications.getPermissionsAsync({});
      if (!response.granted) {
        Alert.alert("Please give the Notification Perissions to this app");
        return;
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hello,",
          body: "This is Notification",
          data: { data: "goes here", test: { test1: "more data" } },
        },
        trigger: {
          seconds: 2,
        },
      });
    } catch (error) {
      console.log("Error Occured", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Give Notification" onPress={shecduleNotification} />
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
