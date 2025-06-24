import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  StyleSheet,
} from "react-native";

const NewComponent = ({
  isModalVisible,
  changeModalVisibility,
  setTask,
  inputValue,
  setInputValue,
  task,
}) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.upperContainer}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(item) => setInputValue(item)}
          placeholder="Add Your Goal"
        />
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            setTask([...task, { title: inputValue }]);
            console.log("Touchable Opcity Pressed");
            changeModalVisibility();
          }}
        >
          <Text style={styles.buttonTextStyle}>Add Goal</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: "row",
    gap: 10,
    marginRight: 10,
    marginLeft: 5,
    paddingTop: 20,
  },
  textInputStyle: {
    borderWidth: 2,
    borderColor: "black",
    width: "80%",
  },
  buttonStyle: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: "white",
  },
});

export default NewComponent;
