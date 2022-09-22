import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CreateNote from "./screens/CreateNote";
import Notes from "./screens/Notes";
import colors from "./constants/colors";
import { Note, Screen } from "./types";

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.NOTES);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "This is a note",
      content: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 2,
      title: "This is a note",
      content: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 3,
      title: "This is a note",
      content: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 4,
      title: "This is a note",
      content: "lorem ipsum dolor sit amet, consectetur",
    },
  ]);
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    Courgette: require("./assets/fonts/Courgette-Regular.ttf"),
    Maitree: require("./assets/fonts/Maitree-Regular.ttf"),
  });

  const addNoteFunction = (title: string, content: string) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), title, content }]);
  };

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen === Screen.NOTES ? (
        <Notes notes={notes} setScreen={setScreen} />
      ) : (
        <CreateNote setScreen={setScreen} addNoteFunction={addNoteFunction} />
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
});
