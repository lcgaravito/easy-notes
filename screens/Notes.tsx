import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";

const Notes = () => {
  return (
    <View style={styles.container}>
      <CustomText style={{ fontSize: 40 }}>Notes...</CustomText>
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
