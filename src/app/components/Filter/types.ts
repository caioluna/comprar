import { FilterStatus } from "@/types/FilterStatus";
import { TouchableOpacityProps } from "react-native";

type FilterProps = TouchableOpacityProps & {
  status: FilterStatus;
  isActive?: boolean;
}

export { FilterProps };
