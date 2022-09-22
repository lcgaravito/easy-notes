import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Subtitle = ({ style, children, ...textProps }: TextProps) => {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontFamily: "Courgette",
    color: colors.white,
  },
});
