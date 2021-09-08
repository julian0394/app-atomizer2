import React from 'react';
// Router
import { useHistory } from 'react-router';
// Estilos
import styled from 'styled-components';

const Footer = (props) => {

  const history = useHistory();
  
  return (  
    <StyFooter>
      <div className="columnas">
        <div className="columna">
          <h4>Atomizer</h4>
          <div className="linea"></div>
          <p>Somos una empresa especializada en la construcción y diseño de equipos de agua a alta presión que pueden implementarse en diferentes áreas de la industria.</p>
        </div>
        <div className="columna servicios">
          <h4>Servicios</h4>
          <div className="linea"></div>
          <StyLink 
            className={props.linkActivado === 'extincion' ? 'link-anulado' : ''} 
            onClick={ () => history.push('/Contra-Incendios') }>
              Extinción
          </StyLink>
          <StyLink 
            className={props.linkActivado === 'altaPresion' ? 'link-anulado' : ''} 
            onClick={ () => history.push('/Alta-Presion') }
              >Alta Presión
          </StyLink>
        </div>
        <div className="columna">
          <h4>Contacto</h4>
          <div className="linea"></div>
          <p>info@atomizer.com.ar</p>
          <p>+54 9 11 4411-6090</p>
          <p>Ciudad Autónoma de Buenos Aires.</p>
          <p>Argentina.</p>
          <StyLink onClick={ () => history.push('/') }>atomizer.com.ar</StyLink>
        </div>
      </div>
      <div className="separacion"></div>
      <p className="envios">Realizamos envíos a todo el país y América Latina</p>
      <p className="copyright">CopyrightⒸ 2021 Atomizer. Todos los derechos reservados.</p>
    </StyFooter>
  )
}

const StyFooter = styled.div`
  position: relative;
  background-color: #2B2B30;
  height: 20rem;
  width: 100%;
  color: #d4d4d4;

  .columnas {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;

    .columna {
      width: 20rem;
      text-align: justify;
      margin: 0 1rem;

      h4 {
        font-weight: bold;
        text-transform: uppercase;
        cursor: default;
      }

      .linea {
        border-bottom: 1px #d4d4d4 solid;
        width: 80%;
        margin: 5px 0 15px;
      }
    }

    .servicios {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 15rem;

      button {
        margin-bottom: 5px;
      }  
    }
  }

  .separacion {
    border-bottom: 1px solid gray;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .envios {
    text-align: center;
  }
  
  .copyright {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    color: #b3b3b3;
    background-color: #1d1d20;
  }
`

const StyLink = styled.button`
  font-style: italic;
  font-size: 1rem;
  cursor: pointer;
  background: none;
  border: none;
  color: #d4d4d4;

  &:hover {
    text-decoration: underline;
  }
`
 
export default Footer;