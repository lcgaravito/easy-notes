import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import CreateNote from "./screens/CreateNote";
import Notes from "./screens/Notes";
import colors from "./constants/colors";
import { Note, Screen } from "./types";

export default function App() {
  const [screen, setScreen] = useState<Screen>(Screen.NOTES);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Create your first note",
      content: 'Use the "Create Note" button to go to the Create Note screen.',
    },
  ]);
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    Courgette: require("./assets/fonts/Courgette-Regular.ttf"),
    Maitree: require("./assets/fonts/Maitree-Regular.ttf"),
  });
  const [isPortrait, setIsPortrait] = useState<boolean>(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };
  const statePortrait = () => {
    setIsPortrait(onPortrait());
  };
  useEffect(() => {
    const suscription = Dimensions.addEventListener("change", statePortrait);

    return () => {
      suscription.remove();
    };
  }, []);

  const addNoteFunction = (title: string, content: string) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), title, content }]);
  };

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {screen === Screen.NOTES ? (
        <Notes isPortrait={isPortrait} notes={notes} setScreen={setScreen} />
      ) : (
        <CreateNote
          isPortrait={isPortrait}
          setScreen={setScreen}
          addNoteFunction={addNoteFunction}
        />
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
