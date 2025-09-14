import { SquareDashed } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyState() {
  return (
    <View style={styles.container}>
      <SquareDashed size={32} color="#828282" />
      <Text style={styles.text}>Sua lista está vazia</Text>
    </View>
  );
}
