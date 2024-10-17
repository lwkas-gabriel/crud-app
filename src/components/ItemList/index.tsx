import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import { Container, ListContainer, Item, OperationContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { EditItemModal } from "../EditItemModal";

export function ItemList(){
    const {items , removeItem} = useContext(ItemContext);
    return (
        <Container>
            <ListContainer>
                {items.map((item) => {
                    return (
                        <Item key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.priority}</p>
                            <OperationContainer>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <button className="edit-btn">Editar</button>
                                    </Dialog.Trigger>
                                    <EditItemModal />
                                </Dialog.Root>
                                <button className="remove-btn" onClick={() => removeItem(item.id)}>Delete</button>
                            </OperationContainer>
                        </Item>
                    );
                })}
            </ListContainer>
        </Container>
    );
}