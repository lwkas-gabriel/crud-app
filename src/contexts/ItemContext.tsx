import { createContext, ReactNode, useEffect, useState } from "react";

export interface Item {
    id: number;
    createdAt: Date;
    name: string;
    description: string;
    priority: 'alta' | 'média' | 'baixa';
  }
  
interface ItemProviderProps{
  children: ReactNode;
}

interface ItemContextType {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (updatedItem: Item) => void;
  removeItem: (id: number) => void;
  filterItems: (priority: 'alta' | 'média' | 'baixa' | 'none') => void;
}

export const ItemContext = createContext<ItemContextType>({} as ItemContextType);

export function ItemProvider({children}: ItemProviderProps){
    const [items, setItems] = useState<Item[]>(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : [];
      });
    const [filteredTasks, setFilteredTasks] = useState<Item[]>(items);
    
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
      setFilteredTasks(items);
    }, [items]);


    function filterItems(priority: 'alta' | 'média' | 'baixa' | 'none'){
      if (priority === 'none') {
        setFilteredTasks(items);
      } else {
        setFilteredTasks(items.filter(item => item.priority === priority));
      }
    }

    function addItem(item: Item){
        setItems((items) => [...items, item]);
    }

    function updateItem(update: Item){
        setItems((items) => items.map((item) => (item.id === update.id ? update : item)));
    }

    function removeItem(id: number){
        setItems((items) => items.filter((item) => item.id !== id));
    }

    return (
        <ItemContext.Provider value={{items: filteredTasks, addItem, updateItem, removeItem, filterItems}}>
            {children}
        </ItemContext.Provider>
    )
}