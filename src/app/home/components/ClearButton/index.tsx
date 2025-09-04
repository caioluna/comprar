import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ClearButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Limpar</Text>
    </TouchableOpacity>
  );
}
