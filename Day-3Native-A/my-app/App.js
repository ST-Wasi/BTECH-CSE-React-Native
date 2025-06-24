import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import { Image } from "expo-image";

export default function App() {
  const [todo, setTodo] = useState("");
  return (
    <View>
      <View style={{ paddingTop: 400 }}>
        <TextInput
          value={todo}
          onChangeText={(text) => setTodo(text)}
          style={{ borderColor: "black", borderWidth: 2 }}
          placeholder="Add Todo"
        />

        <Button
          title="Press"
          onPress={() => {
            console.log(todo);
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStlyes: {
    // backgroundColor: "red",
    color: "white",
  },
});
