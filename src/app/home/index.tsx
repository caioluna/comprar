import { FilterStatus } from "@/types/FilterStatus";
import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, Image, View } from "react-native";

import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import { Filter } from "../components/Filter";
import { Item } from "../components/Item";
import { ClearButton } from "./components/ClearButton";

import { itemsStorage } from "@/storage/itemsStorage";
import { ItemStorage } from "@/storage/types";
import { useEffect, useState } from "react";
import { EmptyState } from "../components/EmptyState";
import { FILTER_STATUS } from "./constants";
import { styles } from "./styles";

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemStorage[]>([]);

  async function handleAdd() {
    if (!description.trim()) return;

    const newItem: ItemStorage = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    await itemsStorage.add(newItem);
    setFilter(FilterStatus.PENDING);
    setDescription("");

    await getItemsByStatus();
  }

  async function handleRemove(itemId: string) {
    try {
      await itemsStorage.remove(itemId);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível filtrar os itens.");
    }
  }

  function handleClear() {
    Alert.alert("Limpar", "Deseja remover todos os itens da lista?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: onClear },
    ]);
  }

  async function onClear() {
    try {
      await itemsStorage.clear();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível remover os itens...");
    }
  }

  async function getItemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter);
      setItems(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItemsByStatus();
  }, [filter, items]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <View style={styles.form}>
        <CustomInput
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
          value={description}
        />
        <CustomButton
          title="Adicionar"
          disabled={description === ""}
          onPress={handleAdd}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}

          <ClearButton onPress={handleClear} disabled={items.length === 0} />
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyState />}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <Item
              data={item}
              handleChangeStatus={() => itemsStorage.toggleStatus(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
}
