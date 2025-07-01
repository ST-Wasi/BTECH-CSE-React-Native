import { Text, View } from "react-native";
// import { View } from "react-native-web";

function UnOrderedList({ data }) {
  return (
    <View style={{ padding: 18 }}>
      {data.map((item, index) => (
        <Text key={index} style={{ marginBottom: 0 }}>
          {"\u2022"} {item}
        </Text>
      ))}
    </View>
  );
}

export default UnOrderedList;
