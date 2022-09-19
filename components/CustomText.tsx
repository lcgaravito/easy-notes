import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";

const CustomText = ({ style, children, ...textProps }: TextProps) => {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
});
