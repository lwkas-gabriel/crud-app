import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import { Container, ListContainer, Item, OperationContainer } from "./styles";

export function ItemList(){
    const {items , removeItem} = useContext(ItemContext);
    return (
        <Container>
            <ListContainer>
                {items.map((item) => {
                    return (
                        <Item>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.priority}</p>
                            <OperationContainer>
                                <button className="edit-btn">Editar</button>
                                <button className="remove-btn" onClick={() => removeItem(item.id)}>Delete</button>
                            </OperationContainer>
                        </Item>
                    );
                })}

                {/* <Item>
                    <h3>Nome do Item</h3>
                    <p>Descriçao da coisa</p>
                    <p>Prioridade dda coisa</p>
                    <OperationContainer>
                        <button className="edit-btn">Editar</button>
                        <button className="remove-btn">Delete</button>
                    </OperationContainer>
                </Item> */}
            </ListContainer>
        </Container>
    );
}