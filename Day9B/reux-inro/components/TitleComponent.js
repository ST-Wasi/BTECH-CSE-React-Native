import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increaseValue } from "../slices/newSlice";

const TitleComponent = () => {
  const count = useSelector((state) => state.newslice.count);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>TitleComponent {count}</Text>
      <Button
        title="Press"
        onPress={() => {
          dispatch(increaseValue());
        }}
      />
    </View>
  );
};

export default TitleComponent;
