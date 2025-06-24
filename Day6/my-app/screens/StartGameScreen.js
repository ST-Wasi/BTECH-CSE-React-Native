import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import ScreenTitle from "../components/ScreenTitle";
import { LinearGradient } from "expo-linear-gradient"; // install command needed npx expo install expo-linear-gradient
import { Ionicons } from "@expo/vector-icons";

const StartGameScreen = ({ userNumber, setUserNumber, step, setStep }) => {
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
          <ScreenTitle children={"Guess The Number"} />

          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              style={styles.textInputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setUserNumber(Number(text))}
            />
            <View style={styles.buttonContainer}>
              <PrimaryButton>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                  <Text style={{ color: "yellow" }}>Reset</Text>
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
                  <Text style={{ color: "yellow" }}>Confirm</Text>
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

export default StartGameScreen;

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
    borderBottomColor: "#ca6f06",
    borderBottomWidth: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
  },
});
