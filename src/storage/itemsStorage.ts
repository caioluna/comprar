import { FilterStatus } from "@/types/FilterStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemStorage } from "./types";

const ITEMS_STORAGE_KEY = "@comprar:items"

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
    return storage ? JSON.parse(storage) : []
  } catch (error) {
    throw new Error(`GET_ITEMS: ${error}`)
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  const items = await get()
  return items.filter(item => item.status === status)
}

async function save(items: ItemStorage[]): Promise<void> {
  try {
    return AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
  } catch (error) {
    throw new Error(`SAVE_ITEMS: ${error}`)
  }
}

async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
  const items = await get()
  const updatedItems = [...items, newItem]

  await save(updatedItems)
  return updatedItems
}

async function remove(id: string): Promise<void> {
  const items = await get()
  const filteredItems = items.filter(item => item.id !== id)

  await save(filteredItems)
}

async function clear(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY)
  } catch (error) {
    throw new Error(`CLEAR_ITEMS: ${error}`)
  }
}

async function toggleStatus(id: string): Promise<void> {
  const items = await get()
  const changedItems = items.map(item => item.id === id ? {
    ...item,
    status: item.status === FilterStatus.PENDING
      ? FilterStatus.DONE
      : FilterStatus.PENDING
  } : item)

  await save(changedItems)
}

export const itemsStorage = {
  get,
  getByStatus,
  add,
  remove,
  clear,
  toggleStatus,
};
