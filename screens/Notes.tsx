import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Notes = () => {
  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
