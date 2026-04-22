import "./App.css";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { useState, useEffect } from "react";

const defaultCitas = [];

function App() {
 
  const [citas, setCitas] = useState(() => {
    try {
      const stored = localStorage.getItem("citas-vet");
      return stored ? JSON.parse(stored) : defaultCitas;
    } catch (e) {
      return defaultCitas;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("citas-vet", JSON.stringify(citas));
    } catch (e) {
      // ignore storage errors
    }
  }, [citas]);

  const agregarCita = (cita) => {
    setCitas((prev) => [...prev, cita]);
  };

const eliminarCita = (id) => {
  if (window.confirm("¿Eliminar esta cita?")) {
    setCitas((prev) =>
      prev.filter((cita) => String(cita.id) !== String(id))
    );
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

