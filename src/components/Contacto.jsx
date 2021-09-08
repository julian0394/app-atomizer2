import React from 'react';
// Estilos
import styled from 'styled-components';
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contacto = (props) => {

  const colorTexto = props.color;

  return (  
    <StyContacto color={colorTexto}>
      <h2>Estemos en contacto</h2>
      <p className="descripcion">Intentaremos responder lo antes posible. Whatsapp es el método más ágil y simple. Al momento de contactarnos siempre es de ayuda que nos envíes toda la información que creas necesaria como los rubros y especificaciones técnicas que te interesan y tus medios de contacto. Estamos acá para ayudarte, tu consulta nunca nos molestaría.</p>
      <div className="items">
        <div className="item">
          <h3><FontAwesomeIcon icon={faWhatsapp} color={colorTexto} /> Whatsapp </h3>
          <p><span>+54 9</span> 11 4046-1110</p>
        </div>
        <div className="item"> 
          <h3><FontAwesomeIcon icon={faEnvelope} color={props.color} /> Email </h3>
          <p>info@atomizer.com.ar
          </p>
        </div>
        <div className="item">
          <h3><FontAwesomeIcon icon={faMapMarkerAlt} color={props.color} /> Ubicación </h3>
          <p>Ciudad Autónoma de </p>
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
    </StyContacto>
  )
}

const StyContacto = styled.div`
  background-color: #EEF0F2;
  height: 21rem;
  width: 100%;
  text-align: center;
  padding-top: 3rem;
  
  .items {
    display: flex;
    justify-content: space-evenly;
  }

  span {
    color: #8a8a8a;
    font-style: italic; 
  }

  h3 {
    color: ${props => props.color};
    /* font-size: 2rem; */
    cursor: default;
    user-select: none;
  }

  .descripcion {
    width: 70%;
    margin: 2rem auto;
  }

  .items {
    padding-top: 1rem;

    .item {
      padding-bottom: 5rem;
    }
  }
`
 
export default Contacto;