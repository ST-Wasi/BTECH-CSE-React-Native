import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import ScreenTitle from "../components/ScreenTitle";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

const GuessScreen = ({ userNumber, setStep }) => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(100);
  const [guess, setGuess] = useState(null);
  function guessTheNumber() {
    let randomValue =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return randomValue;
  }
  useEffect(() => {
    setGuess(guessTheNumber(minValue, maxValue));
  }, [userNumber, minValue, maxValue]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#4c9f83", "#3b5998", "#196a25"]}
        style={{ height: "100%" }}
      >
        <ImageBackground
          source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
          style={{ flex: 1 }}
          imageStyle={{ opacity: 0.15 }}
        >
          <ScreenTitle children={"Opponent's Guess"} />

          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.textInputStyle}>{guess}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                onPressFunction={() => {
                  if (userNumber < guess) {
                    setMaxValue(guess);
                  } else {
                    Alert.alert("Don't say Lie !");
                  }
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Text style={{ color: "yellow" }}>Lower</Text>
                  <Ionicons name="reload" size={15} color="yellow" />
                </View>
              </PrimaryButton>
              <PrimaryButton
                onPressFunction={() => {
                  if (userNumber == null) {
                    Alert.alert("The Number Can't Be Empty");
                  } else {
                    setStep(2);
                  }
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 8,
                  }}
                >
                  <Text style={{ color: "yellow" }}>Higher</Text>
                  <Ionicons name="checkmark" size={24} color="yellow" />
                </View>
              </PrimaryButton>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default GuessScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#72063c",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 8,
    elevation: 49, // it wont work in IOS, (Only works in Android)
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.28,
  },
  textInputStyle: {
    width: 50,
    color: "yellow",
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 15,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
  },
});
