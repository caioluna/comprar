import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { CustomButtonProps } from "./types";

export function CustomButton({ title, ...rest }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
