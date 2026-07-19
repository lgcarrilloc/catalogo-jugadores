import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";
import "./JugadorList.css";


const URL_API =
"https://jugadores.up.railway.app/players";


function JugadorList({ onCargados }) {
  const [jugadores, setJugadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);

    fetch(URL_API)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        return response.json();
      })
      .then((respuesta) => {
        const listaJugadores = respuesta.data || [];

        setJugadores(listaJugadores);

        if (typeof onCargados === "function") {
          onCargados(listaJugadores.length);
        }

        setCargando(false);
      })
      .catch((errorPeticion) => {
        setError(errorPeticion.message);
        setCargando(false);
      });
  }, [onCargados]);

  if (cargando) {
    return (
      <main className="estado-contenedor">
        <div className="spinner"></div>
        <p>Cargando jugadores...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="estado-contenedor">
        <div className="error-box">
          Error: {error}
        </div>
      </main>
    );
  }

  if (jugadores.length === 0) {
    return (
      <main className="estado-contenedor">
        <p>No se encontraron jugadores.</p>
      </main>
    );
  }

  return (
    <main className="jugador-list">
      <div className="grid-jugadores">
        {jugadores.map((jugador) => (
          <JugadorCard
            key={jugador.id}
            jugador={jugador}
          />
        ))}
      </div>
    </main>
  );
}

export default JugadorList;