import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { ItemForm } from "../ItemForm";

export function EditItemModal(){
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div>
                    <Dialog.Title>Edição de Item</Dialog.Title>
                    <CloseButton>X</CloseButton>
                </div>

                <ItemForm />
            </Content>
        </Dialog.Portal>
    );
}