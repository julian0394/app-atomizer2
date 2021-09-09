import React, { useState } from 'react';
// Estilos
import styled from 'styled-components';
import { StyBtnSolido } from '../estilos';
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// Img
import imgQR from '../img/QR.png';
// Modal
import Modal from 'react-modal';

const Contacto2 = (props) => {

  const [modalAbierto, setModalAbierto] = useState(false);

  const colorTexto = props.color;
  const colorHover = props.colorHover;
  const colorActivo = props.colorActivo;

  // const objColores = {
  //   colorTexto: props.color,
  //   colorHover: props.colorHover,
  //   colorActivo: props.colorActivo,
  // }

  /* Evita el desplazamiento cuando el modal está abierto */
  if(modalAbierto) 
    document.body.classList.add('sin-scroll')
  else 
    document.body.classList.remove('sin-scroll')

  return (  
    <StyContacto color={colorTexto}>
      <h2>Estemos en contacto</h2>
      <p className="descripcion">Intentaremos responder lo antes posible. Whatsapp es el método más ágil y simple. Al momento de contactarnos siempre es de ayuda que nos envíes toda la información que creas necesaria como los rubros y especificaciones técnicas que te interesan y tus medios de contacto. Estamos acá para ayudarte, tu consulta nunca nos molestaría.</p>
      <div className="contacto">
        <form>
          <p>Todos los campos son requeridos.</p>
          <input type="text" name="nombre" placeholder="Nombre" required />
          <br />
          <input className="chico" type="tel" name="tel" placeholder="Teléfono" />

          <input className="chico" type="email" name="mail" placeholder="Email" required />
          <br />
          <textarea type="text" name="texto" placeholder="Su mensaje" required />
          <br />
          <StyBtnSolido className="no-selecionable"  color={colorTexto} colorHover={colorHover} colorActivo={colorActivo}>
            Enviar <span><FontAwesomeIcon icon={faArrowRight} color="white" /></span>
          </StyBtnSolido>
        </form>

        <div className="items">
          <div className="item">
            <h3 className="intocable"><FontAwesomeIcon icon={faWhatsapp} color={colorTexto} /> Whatsapp </h3>
            <p><span>+54 9</span> 11 4046-1110</p>            
            <StyMiniBtn 
              className="no-selecionable" 
              color={colorTexto} colorHover={colorHover} colorActivo={colorActivo}
              onClick={() => setModalAbierto(true)}>
                Mostrar QR
            </StyMiniBtn>
          </div>
          <div className="item"> 
            <h3 className="intocable"><FontAwesomeIcon icon={faEnvelope} color={props.color} /> Email </h3>
            <p>info@atomizer.com.ar
            </p>
          </div>
          <div className="item">
            <h3 className="intocable"><FontAwesomeIcon icon={faMapMarkerAlt} color={props.color} /> Ubicación </h3>
            <p>Ciudad Autónoma de </p>
            <p>Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>

      <Modal isOpen={modalAbierto} onRequestClose={() => setModalAbierto(false)} style={estiloModal}>
        <StyH2Modal>Escaneá el QR y comenzá a chatear con nosotros!</StyH2Modal>
        <StyImgModal src={imgQR} alt="QR de contacto" />
        <StyBtnModal 
          color={colorTexto} colorHover={colorHover} colorActivo={colorActivo}
          onClick={() => setModalAbierto(false)}>
            Cerrar
        </StyBtnModal>
      </Modal>

    </StyContacto>
  )
}

// ESTILOS
const StyContacto = styled.div`
position: relative;
  background-color: #EEF0F2;
  width: 100%;
  text-align: center;
  padding-top: 3rem;

  .descripcion {
    width: 70%;
    margin: 2rem auto;
  }

  .contacto {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;

    form {
        margin-right: 2rem;
        
      input, textarea {
        padding: 1rem;
        width: 35rem;
        margin: 0.5rem;
        border: solid 1px #b4b4b4;
        border-radius: 5px;
        font-size: 1rem;
      }

      textarea {
        resize: vertical;
        height: 10rem;
      }
      
      .chico {
        width: 17rem;
      }

      p {
        color: gray;
        font-style: italic;
        margin-bottom: 10px;
        margin-top: -10px;
        margin-left: 1rem;
        text-align: start;
      }
    }

    .items {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      border-left: 1px solid #b4b4b4;
      width: 20rem;
      padding-top: 2rem;

      .item {
        padding-bottom: 4rem;
        text-align: start;
        padding-left: 2rem;
      }
    }

    span {
      color: #8a8a8a;
      font-style: italic; 
    }

    h3 {
      color: ${props => props.color};
      cursor: default;
      user-select: none;
    }


      

     
  
  }
  
  
`

const StyMiniBtn = styled(StyBtnSolido)`
  padding: 5px;
  margin: 0;
  margin-top: 5px;
`

// Interior Modal 
const StyBtnModal = styled(StyBtnSolido)`
  margin-top: 2rem;
`

const StyH2Modal = styled.h2`
  margin-bottom: 2rem;
`

const StyImgModal = styled.img`
  height: 300px;
`

const estiloModal = {
  overlay: {
    backgroundColor: '#2b2b2bc7'
  },         
  content: {
    position: 'absolute',
    margin: '10rem 35rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '15px'
  }         
}

export default Contacto2;