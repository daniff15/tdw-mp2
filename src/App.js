import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Pokedex from "./pages/Pokedex/Pokedex";
import About from "./pages/About/About";
import DetailPokemon from "./pages/DetailPokemon/DetailPokemon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<DetailPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
