import { createContext, ReactNode, useState } from "react";

interface Item {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    priority: 'alta' | 'média' | 'baixa';
  }
  
  interface ItemProviderProps{
    children: ReactNode;
}

  interface ItemContextType {
    items: Item[];
    addItem: (item: Item) => void;
    updateItem: (id: number, updatedItem: Item) => void;
    removeItem: (id: number) => void;
  }

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export function ItemProvider({children}: ItemProviderProps){
    const [items, setItems] = useState<Item[]>([]);

    function addItem(item: Item){
        setItems((state) => [...state, item]);
    }

    function updateItem(id: number, update: Item){
        setItems((state) => state.map((item) => (item.id === id ? update : item)));
    }

    function removeItem(id: number){
        setItems((state) => state.filter((item) => item.id !== id));
    }

    return (
        <ItemContext.Provider value={{items, addItem, updateItem, removeItem}}>
            {children}
        </ItemContext.Provider>
    )
}