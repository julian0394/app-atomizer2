import React from 'react';
import { useHistory } from 'react-router-dom';
// Estilos
import styled from 'styled-components';
import { StyBtn } from '../estilos';
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUndoAlt } from '@fortawesome/free-solid-svg-icons';


const Portada = ({img, color, volver}) => {

  const history = useHistory();
  const rutaAtomizer = () => {
    history.push('/');
  }

  return (  
    <StyPortada className="portada">
      <img src={img} alt="Foto de portada con logo" />
      <div className="grupo-boton">
        <StyBtn onClick="/" borde={color}><FontAwesomeIcon icon={faChevronDown} /> CONOCE MÁS </StyBtn>
        { volver && 
          <StyBtn onClick={rutaAtomizer} borde="#239DDB">
            <FontAwesomeIcon icon={faUndoAlt} /> VOLVER A ATOMIZER
          </StyBtn> 
        }
      </div> 
    </StyPortada>
  );
}

// ESTILOS
const StyPortada = styled.div`
  position: relative;
  
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }

  .grupo-boton {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: -7rem;
    left: 25%;
    right: 25%;
  }
  
  a, button {
    color: white;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

export default Portada;