import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const CategoryScreen = ({}) => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;
