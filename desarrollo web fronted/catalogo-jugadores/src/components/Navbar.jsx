import "./Navbar.css";

function Navbar({ totalJugadores}){
    return (
        <nav className="navbar">
            <h2>Catálogo de Jugadores</h2>

            <span>
            {totalJugadores > 0
            ? `${totalJugadores} jugadores cargados`
            : "Cargando..."}
            </span>
        </nav>
    );
}

export default Navbar;