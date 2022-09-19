import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CreateNote = () => {
  return (
    <View style={styles.container}>
      <Text>CreateNote</Text>
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
