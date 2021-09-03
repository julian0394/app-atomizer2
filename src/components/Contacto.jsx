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
      <p>Intentaremos responder lo antes posible. Whatsapp es el método más ágil y seguro. Al momento de contactarnos siempre ayuda ingresar toda la información que creas necesaria como los rubros y especificaciones técnicas que te interesan y tus medios de contacto. Estamos acá para ayudarte, tu consulta nunca nos molestaría.</p>
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
  background-color: #e8e8ff;
  height: 20rem;
  width: 100%;
  
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
    font-size: 2rem;
  }
`
 
export default Contacto;