import { FilterStatus } from "@/types/FilterStatus";

type ItemData = {
  status: FilterStatus;
  description: string;
}

type ItemProps = {
  data: ItemData;
  onRemove: () => void;
  handleChangeStatus: () => void;
}

export { ItemProps };

