import styled from "styled-components"

export const RelogioEstilizado = styled.main`

    color: var(--branco);
    display: flex;
    align-items: center;
    gap: 3em;
    padding: 2em;
    box-shadow: 0px 5px 15px 1px var(--preto);
    border-radius: 10px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        background-color: var(--preto);
        box-shadow: 0px 5px 10px 1px var(--preto);
    }

    span {
        font-size: 5em;
        font-weight: 600;
    }

    p {
        font-size: 1em;
        font-weight: 700;
    }

`
