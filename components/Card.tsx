import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import colors from "../constants/colors";

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};
const Card = ({ children, style }: CardProps) => {
  return <View style={[styles.root, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  root: {
    padding: 20,
    margin: 5,
    borderRadius: 10,
    shadowColor: colors.lightGrey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: colors.lightGrey,
  },
});
