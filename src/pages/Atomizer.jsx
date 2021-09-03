import React from 'react';
// Componentes
import Portada from '../components/Portada';
import Seleccion from '../components/atomizer/Seleccion';
import Socios from '../components/atomizer/Socios';
import InfoPerez from '../components/atomizer/InfoPerez';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
// Imagen
import imgPortadaAtomizer from '../img/portadas/portada.jpg';

const Atomizer = () => {

  const colorAtomizer = '#239DDB';
 
  return (  
    <div className="cuerpo">
      <Portada img={imgPortadaAtomizer} color={colorAtomizer} volver={false} />
      <h1>Qué estás buscando?</h1>
      <Seleccion />
      <Socios />
      <InfoPerez />
      <Contacto color={colorAtomizer} />
      <Footer />
    </div>
  );
}

export default Atomizer;