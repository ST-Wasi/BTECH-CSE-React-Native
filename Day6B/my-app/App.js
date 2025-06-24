import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GuessScreen from "./screens/GuessScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState(null);
  return (
    <LinearGradient
      colors={["#4c9f7f", "#3b5998", "#1c6a19"]}
      style={{ flex: 1 }}
    >
      {/* <ImageBackground
        source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
        style={{ height: "100%", opacity: 0.18}}
      > */}
      {step == 1 && (
        <StartGameScreen
          step={step}
          setStep={setStep}
          userNumber={userNumber}
          setUserNumber={setUserNumber}
        />
      )}
      {step == 2 && <GuessScreen userNumber={userNumber} setStep={setStep} />}
      {step == 3 && <GameOverScreen />}
      {/* </ImageBackground> */}
      <StatusBar hidden />
    </LinearGradient>
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
