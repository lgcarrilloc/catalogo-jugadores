import "./Header.css";

function Header(){
    return (
        <header className="header">
            <span className="header-icono">⚽</span>
            <h1>Catálogo de Jugadores</h1>
            <p> Explora información detallada de jugadores de fútbol
            obtenida desde una API real utilizando React.
            </p>
        </header>
    );
}
export default Header;