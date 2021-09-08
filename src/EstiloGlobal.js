import { createGlobalStyle } from "styled-components";
// Fuente


const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .negrita {
    font-weight: bold;
  }

  .link-anulado {
    font-weight: bold;
    pointer-events: none;
    text-decoration: underline;
  }
` 

export default EstiloGlobal;