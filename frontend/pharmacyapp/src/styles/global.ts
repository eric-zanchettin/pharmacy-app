import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Varela Round', sans-serif;
        font-weight: 400;

        button {
            cursor: pointer;
        }

        a {
            color: initial;
            text-decoration: none;
        }
    }

    body {
        background-color: #e9ffff;
    }
`;