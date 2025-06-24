import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { use } from "react";
// import Ionicons from '@expo/vector-icons/Ionicons';

const StartGameScreen = ({ step, setStep, userNumber, setUserNumber }) => {
  return (
    <>
      {/* Title Start */}
      <ScreenTitle children={"Guess The Number"} />
      {/* Title End */}

      {/* Container Start */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={(text) => setUserNumber(Number(text))}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPressFunction={() => {
              console.log("Reset Button Pressed");
            }}
            children={"Reset"}
          />
          <PrimaryButton
            onPressFunction={() => {
              if (userNumber == null) {
                return;
              } else {
                setStep(2);
              }
            }}
            children={"Confirm"}
          />
        </View>
      </View>
      {/* Container End */}
      <StatusBar hidden={true} />
    </>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#e88282",
    marginHorizontal: 20,
    marginTop: 70,
    borderRadius: 8,
    alignItems: "center",
    padding: 36,
    elevation: 4, // ONly for Android
    // for IOS
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  textInputStyle: {
    width: 50,
    fontSize: 28,
    color: "yellow",
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 90,
  },
});
