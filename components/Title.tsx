import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Title = ({ style, children, ...textProps }: TextProps) => {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: "Poppins",
    color: colors.white,
  },
});
