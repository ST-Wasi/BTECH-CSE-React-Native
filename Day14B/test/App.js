import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Notification from "expo-notifications";
import { useEffect } from "react";

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  useEffect(() => {
    // let mount = true;

    const subscription = Notification.addNotificationReceivedListener(
      (response) => {
        // when notification is sent succesfully to the user
        console.log("response", response);
      }
    );
    const subscription2 = Notification.addNotificationResponseReceivedListener(
      () => {
        //  when user taps of the notification and enters the app
      }
    );
    const subscription3 = Notification.addNotificationResponseClearedListener(
      () => {
        // this will work when notification is clearrd
      }
    );

    return () => {
      subscription.remove();
      subscription2.remove();
      subscription3.remove();
    };
  }, []);

  async function getLocalNotification() {
    try {
      console.log("Notification function executed");
      await Notification.scheduleNotificationAsync({
        content: {
          title: "Hello,",
          body: "This is Notification",
          data: {
            id: "wasi",
          },
        },
        trigger: {
          seconds: 2,
        },
      });
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Give Notification" onPress={getLocalNotification} />
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
