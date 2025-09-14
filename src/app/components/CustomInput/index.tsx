import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";
import { CustomInputProps } from "./types";

export function CustomInput({ ...rest }: CustomInputProps) {
  return (
    <TextInput
      placeholderTextColor="#74798B"
      style={styles.container}
      {...rest}
    />
  );
}
