import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";

const CreateNote = () => {
  return (
    <View style={styles.container}>
      <CustomText>CreateNote</CustomText>
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
