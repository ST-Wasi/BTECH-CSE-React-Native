import { View, Text } from "react-native";
import { MEALS } from "../utils/data/dummy-data";
import UnOrderedList from "../components/UnOrderedList";
import { Image } from "react-native";

const DishDetail = ({ route }) => {
  const { id } = route.params;

  const meal = MEALS.find((item) => item.id == id);

  return (
    <View style={{ height: "100%" }}>
      <View style={{ padding: 20, height: "100%" }}>
        <Text style={{ textAlign: "center" }}>{meal.title}</Text>
        <Image
          style={{ width: "100%", height: "40%" }}
          source={{ uri: meal.imageUrl }}
        />
      </View>
    </View>
  );
};

export default DishDetail;
