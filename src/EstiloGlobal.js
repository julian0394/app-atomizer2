import { createGlobalStyle } from "styled-components";
// Fuente


const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }



  /* .visible {
    z-index: 2;
    opacity: 1;
  } */

  .negrita {
    font-weight: bold;
  }
` 

export default EstiloGlobal;