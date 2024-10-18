
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FilterBarContainer, SelectWrapper, Button } from './styles';
import { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';

const filterSchema = z.object({
    priority: z.enum(['alta', 'média', 'baixa', 'none']),
});

type FilterFormData = z.infer<typeof filterSchema>;

export function FilterBar(){

    const {filterItems} = useContext(ItemContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FilterFormData>({
        resolver: zodResolver(filterSchema),
      });

    function handleSearchByPriority(data: FilterFormData){
        //console.log(data);
        filterItems(data.priority);
    }

    return (
        <FilterBarContainer onSubmit={handleSubmit(handleSearchByPriority)}>
            <SelectWrapper>
                <select {...register('priority')}>
                <option value="none">Todas as Tarefas</option>
                <option value="alta">Alta</option>
                <option value="média">Média</option>
                <option value="baixa">Baixa</option>
                </select>
                {errors.priority && <p>{errors.priority.message}</p>}
            </SelectWrapper>

            <Button type="submit">Filtrar</Button>
        </FilterBarContainer>
    );
}