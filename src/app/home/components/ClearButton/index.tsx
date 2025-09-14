import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

export function ClearButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>Limpar</Text>
    </TouchableOpacity>
  );
}
