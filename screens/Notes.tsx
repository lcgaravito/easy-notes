import { FlatList, StyleSheet, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Button, Card, Paragraph, Subtitle, Title } from "../components";
import { Note, Screen } from "../types";

type NotesProps = {
  notes: Note[];
  setScreen: Dispatch<SetStateAction<Screen>>;
};

const Notes = ({ notes, setScreen }: NotesProps) => {
  return (
    <View style={styles.screen}>
      <Title style={{ fontSize: 40 }}>Notes...</Title>
      <FlatList
        data={notes.reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginHorizontal: 0 }}>
            <Subtitle>{item.title}</Subtitle>
            <Paragraph>{item.content}</Paragraph>
          </Card>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Button
          title="Crear Nota"
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
});
