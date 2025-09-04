import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";
import { CustomInputProps } from "./types";

export function CustomInput({ ...rest }: CustomInputProps) {
  return <TextInput style={styles.container} {...rest} />;
}
