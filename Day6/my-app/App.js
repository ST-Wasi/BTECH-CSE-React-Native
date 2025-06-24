import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GuessScreen from "./screens/GuessScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState(null);
  return (
    <>
      {step == 1 && (
        <StartGameScreen
          userNumber={userNumber}
          setUserNumber={setUserNumber}
          step={step}
          setStep={setStep}
        />
      )}
      {step == 2 && <GuessScreen userNumber={userNumber} setStep={setStep} />}
      <StatusBar hidden />
    </>
  );
}

const styles = StyleSheet.create({});
