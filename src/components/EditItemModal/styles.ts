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
    min-width: 40%;
    border-radius: 6px;
    padding: 2.5rem 3rem;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #cccccc99;

    div{
        display: flex;
        justify-content: space-between;
    }

    form{
        div{
            display: flex;
            flex-direction: column;
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