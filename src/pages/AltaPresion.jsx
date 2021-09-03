import React from 'react';
import { useHistory } from 'react-router-dom';
// Componentes
import Portada from '../components/Portada';
// Imagenes
import imgPortadaAgua from '../img/portadas/portadaAgua.jpg';

const AltaPresion = () => {

  const colorAgua = '#345AD5';

  const history = useHistory();
  const manejoCambioRuta = (ruta)  => {
    history.push(ruta);
  }

  return (
    <div className="cuerpo">
      <Portada img={imgPortadaAgua} color={colorAgua} volver={true} />
      <button onClick={ () => manejoCambioRuta('/') }>VOLVER</button>
    </div>
  );
}
 
export default AltaPresion;