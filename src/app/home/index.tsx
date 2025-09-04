import { FilterStatus } from "@/types/FilterStatus";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";

import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import { Filter } from "../components/Filter";
import { Item } from "../components/Item";
import { ClearButton } from "./components/ClearButton";

import { FILTER_STATUS } from "./constants";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <CustomInput placeholder="O que você precisa comprar?" />
        <CustomButton title="Adicionar" onPress={() => alert("olá")} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <ClearButton />
        </View>

        <Item
          data={{ description: "Tomate", status: FilterStatus.DONE }}
          handleChangeStatus={() => console.log("change")}
          onRemove={() => console.log("remove")}
        />
      </View>
    </View>
  );
}
