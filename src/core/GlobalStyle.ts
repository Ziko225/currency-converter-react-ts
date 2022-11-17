import { createGlobalStyle } from "styled-components";
import img from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-image: url(${img});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }

    *,
    ::after ::before {
        box-sizing: inherit;
    }
`;