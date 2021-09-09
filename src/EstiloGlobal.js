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

  .no-selecionable {
    user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
  }

  .intocable {
    user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    pointer-events: none;
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 60%;
    height: 60%;
  }

  .overlayModal {
    background-color: #3A3A3A;
  }

  .sin-scroll {
    overflow-y: hidden;
    overflow-x: hidden;
  }
` 

export default EstiloGlobal;