import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity } from "react-native";
import { StatusIcon } from "../StatusIcon";
import { styles } from "./styles";
import { FilterProps } from "./types";

export function Filter({ status, isActive, ...rest }: FilterProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.8}
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
    >
      <StatusIcon status={status} />
      <Text style={styles.status}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
