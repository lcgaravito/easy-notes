import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CreateNote from "./screens/CreateNote";
import Notes from "./screens/Notes";

enum Screen {
  NOTES,
  CREATE_NOTE,
}

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.NOTES);
  return (
    <View style={styles.container}>
      {screen === Screen.NOTES ? <Notes /> : <CreateNote />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
