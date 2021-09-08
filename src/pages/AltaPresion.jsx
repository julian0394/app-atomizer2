import React from 'react';
// Componentes
import Portada from '../components/Portada';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
// Imagenes
import imgPortadaAgua from '../img/portadas/portadaAgua.jpg';

const AltaPresion = () => {

  const colorAgua = '#345AD5';

  return (
    <div className="cuerpo">
      <Portada img={imgPortadaAgua} color={colorAgua} volver={true} />
      <Contacto color={colorAgua} />
      <Footer linkActivado="altaPresion" />
    </div>
  );
}
 
export default AltaPresion;