import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
`;

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

export const Card = styled.li<{ isExiting: boolean }>`
    width: 50%;
    min-width: 240px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    animation: ${(props) => (props.isExiting ? fadeOut : fadeIn)} 0.5s forwards;
    transition: background-color 0.3s ease, color 0.3s ease;

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