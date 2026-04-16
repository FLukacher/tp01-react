import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas = [], eliminarCita }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      {/* dinamicas */}
      
      {citas.map((cita) => (
        <Cita
          key={cita.id}
          id={cita.id}
          mascota={cita.mascota}
          propietario={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          eliminarCita={eliminarCita}
        />
      ))}
    </>
  );
}

export default Listado;