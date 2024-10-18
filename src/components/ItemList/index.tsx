import { useContext, useState } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import { Container, ListContainer, Card, OperationContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { EditItemModal } from "../EditItemModal";
import { Pagination } from "../Pagination";

export function ItemList(){
    const {items ,removeItem} = useContext(ItemContext);
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = items.slice(indexOfFirstTask, indexOfLastTask);

    const [tasksToRemove, setTasksToRemove] = useState<number[]>([]);

    function handleDelete(taskId: number) {
        setTasksToRemove((prev) => [...prev, taskId]);
        setTimeout(() => {
            removeItem(taskId);
            setTasksToRemove((prev) => prev.filter((id) => id !== taskId));
        }, 500);
    };

    return (
        <Container>
            <ListContainer>
                {currentTasks.map((item) => {
                    return (
                        <Card key={item.id}
                            isExiting={tasksToRemove.includes(item.id)}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.priority}</p>
                            <OperationContainer>
                                <Dialog.Root>
                                    <Dialog.Trigger asChild>
                                        <button className="edit-btn">Editar</button>
                                    </Dialog.Trigger>
                                    <EditItemModal itemId={item.id}/>
                                </Dialog.Root>
                                <button className="remove-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                            </OperationContainer>
                        </Card>
                    );
                })}
            </ListContainer>

            <Pagination
                totalTasks={items.length}
                tasksPerPage={tasksPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </Container>
    );
}