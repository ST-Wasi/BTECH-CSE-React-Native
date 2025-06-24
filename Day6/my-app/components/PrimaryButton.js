import { Text, Pressable, StyleSheet, View } from "react-native";

const PrimaryButton = ({ children, onPressFunction }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={() => {
          onPressFunction();
        }}
        android_ripple={{ color: "white" }}
        style={styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    color: "yellow",
  },
  iosRipple: {
    backgroundColor: "white",
    opacity: 0.12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
    color: "yellow",
  },
});
