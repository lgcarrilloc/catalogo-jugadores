import "./JugadorCard.css";

const IMAGEN_RESPALDO =
  "https://ui-avatars.com/api/?background=1e293b&color=ffffff&name=";

function JugadorCard({ jugador }) {
  const {
    name,
    age,
    birthDate,
    currentClub,
    nationalTeam,
    position,
    number,
    photoUrl,
  } = jugador;

  const manejarErrorImagen = (evento) => {
    evento.target.onerror = null;

    evento.target.src =
      `${IMAGEN_RESPALDO}${encodeURIComponent(
        name || "Jugador"
      )}`;
  };

  return (
    <article className="jugador-card">
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={name || "Jugador"}
          onError={manejarErrorImagen}
        />
      ) : (
        <img
          src={IMAGEN_RESPALDO + encodeURIComponent(name || "Jugador")}
          alt={name || "Jugador"}
        />
      )}

      <h2>{name || "Nombre no disponible"}</h2>

      <div className="jugador-card-seleccion">
        <span>
          {nationalTeam || "Selección no disponible"}
        </span>

        <span>
          {currentClub || "Club no disponible"}
        </span>
      </div>

      <div className="jugador-datos">
        <p>
          <strong>Posición:</strong> {position || "N/D"}
        </p>

        <p>
          <strong>Número:</strong> {number ?? "N/D"}
        </p>

        <p>
          <strong>Edad:</strong> {age ?? "N/D"}
        </p>

        {birthDate && (
          <p>
            <strong>Nacimiento:</strong> {birthDate}
          </p>
        )}
      </div>
    </article>
  );
}

export default JugadorCard;