import { FilterBar } from "../../components/FilterBar";
import { ItemForm } from "../../components/ItemForm";
import { ItemList } from "../../components/ItemList";

export function Home(){
    return (
        <>
            <ItemForm />
            <FilterBar />
            <ItemList/>
        </>
    );
}