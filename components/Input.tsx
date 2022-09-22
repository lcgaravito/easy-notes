import { StyleSheet, TextInput, TextInputProps } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Input = ({ style, ...textInputProps }: TextInputProps) => {
  return <TextInput style={[styles.input, style]} {...textInputProps} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    borderWidthColor: colors.gray,
    backgroundColor: colors.lightGrey,
    color: colors.white,
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
  },
});
