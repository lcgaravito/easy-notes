import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import colors from "../constants/colors";

type ButtonProps = {
  variant: "primary" | "secondary";
  title: string;
  onPress: TouchableOpacityProps["onPress"];
};

const Button = ({ variant, title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          shadowColor:
            variant === "primary" ? colors.primary : colors.lightGrey,
          backgroundColor:
            variant === "primary" ? colors.primary : colors.lightGrey,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: variant === "primary" ? colors.gray : colors.white,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flex: 0.5,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins",
  },
});
