import { View, Text, StyleSheet, Alert } from "react-native";
import ScreenTitle from "../components/ScreenTitle";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";

const GuessScreen = ({ userNumber, setStep }) => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(99);
  const [guess, setGuess] = useState(minValue);

  function getRandomNumber() {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  useEffect(() => {
    setGuess(getRandomNumber());
  }, [minValue, maxValue]);

  return (
    <>
      {/* Title Start */}
      <ScreenTitle children={"Opponent's Guess"} />
      {/* Title End */}

      {/* Container Start */}
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.textInputStyle}> {guess} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            onPressFunction={() => {
              if (userNumber < guess) {
                setMaxValue(guess);
              } else if (userNumber == guess) {
                setStep(3);
              } else {
                Alert.alert("Dont lie");
              }
            }}
            children={"Lower"}
          />
          <PrimaryButton
            onPressFunction={() => {
              if (userNumber > guess) {
                setMinValue(guess);
              } else if (userNumber == guess) {
                setStep(3);
              } else {
                Alert.alert("Dont lie");
              }
            }}
            children={"Higher"}
          />
        </View>
      </View>
    </>
  );
};

export default GuessScreen;

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
