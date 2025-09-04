import { Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusIcon } from "../StatusIcon";
import { styles } from "./styles";
import { ItemProps } from "./types";

export function Item({ data, onRemove, handleChangeStatus }: ItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleChangeStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>
      <Text style={styles.itemText}>{data.description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
