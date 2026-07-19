import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JugadorList from "./components/JugadorList";

function App() {
  const [totalJugadores, setTotalJugadores] = useState(0);

  return (
    <>
      <Navbar totalJugadores={totalJugadores} />
      <Header />
      <JugadorList onCargados={setTotalJugadores} />
    </>
  );
}

export default App;