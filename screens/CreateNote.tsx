import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Input, Title } from "../components";
import { Screen } from "../types";
import colors from "../constants/colors";

type CreateNoteProps = {
  isPortrait: boolean;
  setScreen: Dispatch<SetStateAction<Screen>>;
  addNoteFunction: (title: string, content: string) => void;
};
const CreateNote = ({
  isPortrait,
  setScreen,
  addNoteFunction,
}: CreateNoteProps) => {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteContent, setNoteContent] = useState<string>("");
  const handlerAddNote = () => {
    if (noteTitle && noteContent) {
      addNoteFunction(noteTitle, noteContent);
      setScreen(Screen.NOTES);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screenContainer}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Title style={{ fontSize: 40 }}>Create a Note...</Title>
            <Input
              style={styles.noteTitle}
              value={noteTitle}
              onChangeText={setNoteTitle}
              placeholder="Note Title..."
              placeholderTextColor={colors.placeholderColor}
            />
            <Input
              style={[
                styles.noteContent,
                {
                  height:
                    Dimensions.get("window").height / (isPortrait ? 3 : 4),
                },
              ]}
              multiline
              value={noteContent}
              onChangeText={setNoteContent}
              placeholder="Note Content..."
              placeholderTextColor={colors.placeholderColor}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Go back"
                variant="secondary"
                onPress={() => setScreen(Screen.NOTES)}
              />
              <Button
                title="Create Note"
                variant="primary"
                onPress={() => handlerAddNote()}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  noteTitle: {
    fontSize: 30,
    fontFamily: "Courgette",
  },
  noteContent: {
    textAlignVertical: "top",
    fontFamily: "Maitree",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
