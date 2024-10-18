import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    align-items: center;
`;

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    max-width: 100%;
    padding: 20px;
`;

export const Card = styled.li`
    width: 50%;
    min-width: 240px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;

    h3{
        margin: 0;
    }

    p{
        margin: 0.5rem 0;
    }
`;

export const OperationContainer = styled.div`
    display: flex;
    gap: 1rem;

    button {
        display: flex;
        gap: 0.5rem;
        border-radius: 6px;

        &.edit-btn{
            background-color: #45a050;
            color: white;
            transition: 0.5s;
        }

        &.remove-btn{
            background-color: red;
            color: white;
            transition: 0.5s;
        }

        &:hover{
            filter: saturate(200%);
        }
    }
`  