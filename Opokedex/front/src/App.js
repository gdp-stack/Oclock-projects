import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import PokemonsPage from "./pages/PokemonsPage";
import TeamsPage from "./pages/TeamsPage";
import PageTest from "./pages/PageTest";
import ComparePokemonPage from "./pages/ComparePokemonPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<PokemonsPage />} />
          <Route path="/teams" exact element={<TeamsPage />} />
          <Route path="/comparateur" exact element={<ComparePokemonPage />} />
          <Route path="/test" exact element={<PageTest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
