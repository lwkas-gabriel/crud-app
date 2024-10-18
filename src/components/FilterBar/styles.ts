import styled from "styled-components";

export const FilterBarContainer = styled.form`
    display: flex;
    margin-top: 1rem;
    width: 70%;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    margin: 1rem auto;

    @media(min-width: 768px){
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

export const SelectWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;

    @media (min-width: 768px) {
        width: auto;
    }

    select {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
        outline: none;
        transition: border-color 0.3s ease;

        &:focus {
        border-color: #007bff;
        }
    }
`;

export const Button = styled.button`
    padding:  0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color .3s ease;

    &:hover{
        background-color: #0056b3;
    }

    &:disabled{
        background-color: #ccc;
        cursor: not-allowed;
    }

`;