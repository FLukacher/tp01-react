import "./Error.css";

function Error({ mensaje }) {
  return (
    <p className="alerta-error">
      {mensaje}
    </p>
  );
}

export default Error;