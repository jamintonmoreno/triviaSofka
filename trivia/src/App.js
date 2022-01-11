
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './vistas/home';
import Form from './vistas/formulario';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/init/questions/:nameJugador" element={<Form/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
