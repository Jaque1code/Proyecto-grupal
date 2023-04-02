import { useEffect,useState } from "react";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Barra from './components/Barra.jsx'
import Home from './views/Home.jsx';
import Registrar from './views/Registrar.jsx';
import Ingresar from './views/Ingresar.jsx'
import Detalle  from './views/Detalle.jsx';
import ContextoGlobal from "./contexts/ContextoGlobal";

function App() {

  const [autos, setAutos] = useState([]);

  const getAutos = async () => {
      const res =  await fetch(`http://localhost:3000/autos.json`);
      const data = await res.json(); 
     
  } 

  useEffect(() => {
      getAutos(); 

  }, [])  

  return (
    <div className="App">

     <ContextoGlobal.Provider value={{autos}}>   
      <BrowserRouter>
       <Barra></Barra>
          <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/registrar' element={<Registrar></Registrar>}></Route>
            <Route path='/ingresar' element={<Ingresar></Ingresar>}></Route>
            <Route path='/detalle/:id' element={<Detalle></Detalle>}></Route>
         </Routes>
      </BrowserRouter>
      </ContextoGlobal.Provider> 
    </div>
  );
}

export default App;
