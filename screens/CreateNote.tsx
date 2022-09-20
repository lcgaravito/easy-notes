import { StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Button, Title } from "../components";
import { Screen } from "../types";

type CreateNoteProps = {
  setScreen: Dispatch<SetStateAction<Screen>>;
};
const CreateNote = ({ setScreen }: CreateNoteProps) => {
  return (
    <View style={styles.container}>
      <Title style={{ fontSize: 40 }}>Create a Note</Title>
      <View style={styles.buttonContainer}>
        <Button
          title="Volver"
          variant="secondary"
          onPress={() => setScreen(Screen.NOTES)}
        />
        <Button
          title="Crear Nota"
          variant="primary"
          onPress={() => setScreen(Screen.NOTES)}
        />
      </View>
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
