import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
    width: 50%;
    min-width: 240px;
    border-radius: 6px;
    padding: 1rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: gray;

    div{
        display: flex;
        justify-content: space-between;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        div{
            display: flex;
            flex-direction: column;
        }

        button{
            margin-top: 10px;
            border-radius: 6px;
            background-color: green;
        }
    }
`;

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

export const CloseButton = styled(Dialog.Close)`
    background-color: transparent;
`