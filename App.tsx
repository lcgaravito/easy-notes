import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CreateNote from "./screens/CreateNote";
import Notes from "./screens/Notes";

enum Screen {
  NOTES,
  CREATE_NOTE,
}

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.NOTES);
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

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
