import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas = [], eliminarCita }) {
  return (
    <>
      <h2>Administra tus citas</h2>

      {/* hardcodeadas */}
      <Cita
        mascota="Nina"
        propietario="Martin"
        fecha="2021-08-05"
        hora="08:20"
        sintomas="Le duele la pierna"
      />

      <Cita
        mascota="Sifon"
        propietario="Flecha"
        fecha="2023-08-05"
        hora="09:24"
        sintomas="Duerme mucho"
      />

      <Cita
        mascota="Floki"
        propietario="Ari"
        fecha="2023-08-05"
        hora="16:15"
        sintomas="No está comiendo"
      />

      {/* dinámicas */}
      {citas.map((cita) => (
        <Cita
          key={cita.id}
          {...cita}
          id={cita.id}
          eliminarCita={eliminarCita}
        />
      ))}
    </>
  );
}

export default Listado;