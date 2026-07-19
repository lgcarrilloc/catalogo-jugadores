import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [totalJugadores] = useState(0);

  return (
    <>
      <Navbar totalJugadores={totalJugadores} />
      <Header />
    </>
  );
}

export default App;