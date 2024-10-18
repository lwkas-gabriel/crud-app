import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import * as z  from 'zod';
import { Item, ItemContext } from "../../contexts/ItemContext";
import { useContext, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const itemSchema = z.object({
    name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres'),
    description: z.string().min(5, 'A descrição precisa ter no mínimo 5 caracteres'),
    priority: z.enum(['alta', 'média', 'baixa']),
  });
  
type ItemFormData = z.infer<typeof itemSchema>;
  

interface EditModalProps{
    itemId: number;
}

export function EditItemModal({itemId}: EditModalProps){
    const {items, updateItem} = useContext(ItemContext);
    const item = items.find((item) => item.id === itemId);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ItemFormData>({
        resolver: zodResolver(itemSchema),
        defaultValues: {
          name: item?.name  || '',
          description: item?.description || '',
          priority: item?.priority || 'média',
        },
      });

    function update(data: ItemFormData){
        const newItem: Item = {id: itemId, createdAt: item!.createdAt, ...data}
        //console.log(item);
        updateItem(newItem);
        reset();
    }

    useEffect(() => {
        reset({
          name: item?.name || '',
          description: item?.description || '',
          priority: item?.priority || 'média',
        });
      }, [item, reset]);

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <div>
                    <Dialog.Title>Edição de Item</Dialog.Title>
                    <CloseButton>X</CloseButton>
                </div>
                
                <form onSubmit={handleSubmit(update)}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" {...register('name')} />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="description">Descrição</label>
                        <input type="text" id="description" {...register('description')} />
                        {errors.description && <span>{errors.description.message}</span>}
                    </div>
                    
                    <div>
                        <label htmlFor="priority">Prioridade</label>
                        <select id="priority" {...register('priority')}>
                            <option value="alta">Alta</option>
                            <option value="média">Média</option>
                            <option value="baixa">Baixa</option>
                        </select>
                        {errors.priority && <span>{errors.priority.message}</span>}
                    </div>
                    
                    <button type="submit">Salvar</button>
                </form>
            </Content>
        </Dialog.Portal>
    );
}