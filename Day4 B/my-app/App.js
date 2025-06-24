import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import NewComponent from "./components/NewComponent";
import * as Location from "expo-location";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [task, setTask] = useState([]);

  async function getData(city, country) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=6f991671b8087be07829093df3f31e7c`
      );
      const data = await response.json();
      setTask(data);
    } catch (error) {
      console.log("✌️error --->", error);
    }
  }

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  function changeModalVisibility() {
    setIsModalVisible(!isModalVisible);
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={{ justifyContent: "center" }}
        onPress={() => {
          changeModalVisibility();
        }}
      >
        <Text style={{ color: "black", textAlign: "center" }}>Open Modal</Text>
      </Pressable>
      <NewComponent
        isModalVisible={isModalVisible}
        changeModalVisibility={changeModalVisibility}
        setTask={setTask}
        inputValue={inputValue}
        task={task}
        setInputValue={setInputValue}
      />
      /
      <FlatList
        style={styles.lowerContainer}
        data={task}
        renderItem={({ item }, index) => {
          return (
            <Text key={index} style={styles.listItemStyle}>
              {item.title}
            </Text>
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    paddingTop: 70,
  },
  lowerContainer: {
    borderColor: "black",
    borderTopWidth: 2,
    width: "100%",
    padding: 10,
  },
  textColor: {
    color: "red",
    fontSize: 70,
  },
  listItemStyle: {
    textAlign: "center",
    backgroundColor: "blue",
    padding: 15,
    color: "white",
    borderRadius: 20,
    marginBottom: 20,
  },
});
