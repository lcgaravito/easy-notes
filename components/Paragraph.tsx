import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Paragraph = ({ style, children, ...textProps }: TextProps) => {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Maitree",
    color: colors.white,
  },
});
