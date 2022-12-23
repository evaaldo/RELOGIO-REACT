import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --preto: #000;
        --branco: #fff;
        --fundo: #351c88;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--fundo);
        height: 100vh;
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export default GlobalStyle
