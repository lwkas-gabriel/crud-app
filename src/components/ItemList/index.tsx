import { Container, ListContainer, Item, OperationContainer } from "./styles";

export function ItemList(){
    return (
        <Container>
            <ListContainer>
                <Item>
                    <h3>Nome do Item</h3>
                    <p>Descriçao da coisa</p>
                    <p>Prioridade dda coisa</p>
                    <OperationContainer>
                        <button className="edit-btn">Editar</button>
                        <button className="remove-btn">Delete</button>
                    </OperationContainer>
                </Item>
            </ListContainer>
        </Container>
    );
}