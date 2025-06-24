import { View, Text, StyleSheet } from "react-native";

const ScreenTitle = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "blue",
    marginHorizontal: 20,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    borderRadius: 8,
  },
  titleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
