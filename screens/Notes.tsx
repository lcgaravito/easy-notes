import { FlatList, StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Button, Card, Paragraph, Subtitle, Title } from "../components";
import { Note, Screen } from "../types";

type NotesProps = {
  isPortrait: boolean;
  notes: Note[];
  setScreen: Dispatch<SetStateAction<Screen>>;
};

const Notes = ({ isPortrait, notes, setScreen }: NotesProps) => {
  return (
    <View style={styles.screen}>
      <Title style={{ fontSize: 40 }}>Notes...</Title>
      <FlatList
        data={notes.sort((a, b) => b.id - a.id)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginHorizontal: 0 }}>
            <Subtitle>{item.title}</Subtitle>
            <Paragraph>{item.content}</Paragraph>
          </Card>
        )}
      />
      <View
        style={
          isPortrait
            ? styles.buttonContainerPortrait
            : styles.buttonContainerLandscape
        }
      >
        <Button
          title="Create Note"
          variant="primary"
          onPress={() => setScreen(Screen.CREATE_NOTE)}
        />
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  buttonContainerPortrait: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 15,
  },
  buttonContainerLandscape: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
