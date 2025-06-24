import { View, Text, StyleSheet } from "react-native";

const ScreenTitle = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleTextColor}> {children} </Text>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    padding: 16,
    borderColor: "#ff6600",
    borderWidth: 2,
    borderRadius: 8,
  },
  titleTextColor: {
    color: "yellow",
    fontSize: 20,
  },
});
