import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Input, Button, Form, Select, ErrorMsg } from "./styles";
import { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";

const itemSchema = z.object({
    name: z.string().min(3, {message: "O nome deve ter pelo menos 3 caracteres"}),
    description: z.string().min(1, {message: "A descrição é obrigatória"}),
    priority: z.enum(["alta", "média", "baixa"], {message: "prioridade inválida"}),
})

type ItemFormInput = z.infer<typeof itemSchema>;


export function ItemForm(){
    const { reset, handleSubmit, register, formState: {errors, isSubmitting} } = useForm<ItemFormInput>({
        resolver: zodResolver(itemSchema),
    });

    const { addItem } = useContext(ItemContext);

    function handleCreateItem(data: ItemFormInput){
        const newItem = {id: Date.now(), createdAt: new Date(), ...data};
        addItem(newItem);
        reset();
        //searchIssues(data.query);
    }

    return (
        <Form action="" onSubmit={handleSubmit(handleCreateItem)}>
            <Input type="text" placeholder="Nome" {...register("name")}/>
            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            <Input type="text" placeholder="Descrição" {...register("description")}/>
            {errors.description && <ErrorMsg>{errors.description.message}</ErrorMsg>}
            <Button type="submit" disabled={isSubmitting}>Enviar</Button>
            <Select {...register('priority')}>
                <option value="alta">Alta</option>
                <option value="média">Média</option>
                <option value="baixa">Baixa</option>
            </Select>
            {errors.priority && <ErrorMsg>{errors.priority.message}</ErrorMsg>}
        </Form>
    )
}