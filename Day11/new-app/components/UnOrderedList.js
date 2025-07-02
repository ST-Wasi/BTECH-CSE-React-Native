import { View, Text } from "react-native";

const UnOrderedList = ({ data }) => {
  return (
    <View style={{ padding: 20 }}>
      {data.map((item, index) => {
        return (
          <Text style={{ marginBottom: 8 }} key={index}>
            {" "}
            {"\u2022"} {item}
          </Text>
        );
      })}
    </View>
  );
};

export default UnOrderedList;
