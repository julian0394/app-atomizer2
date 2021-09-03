// Estilos
import EstiloGlobal from '../EstiloGlobal';
// Paginas
import Atomizer from '../pages/Atomizer';
import ContraIncendios from '../pages/ContraIncendios';
import AltaPresion from '../pages/AltaPresion';
// Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <Switch>
        <Route path="/" component={Atomizer} exact />
        <Route path="/Contra-Incendios" component={ContraIncendios} />
        <Route path="/Alta-Presion" component={AltaPresion} />
      </Switch>
    </div>
  );
}

export default App;
