import "./App.css";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    if (window.confirm("¿Eliminar esta cita?")) {
      setCitas(citas.filter((cita) => cita.id !== id));
    }
  };
  return (
    
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="row">
        <div className="one-half column">
          <Formulario agregarCita={agregarCita} />               
        </div>

        <div className="one-half column">
          <Listado citas={citas} eliminarCita={eliminarCita} /> 
        </div>
      </div>
    </div>
  );
}

export default App;

