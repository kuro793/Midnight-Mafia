import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explanation from "./pages/Explanation";
import Roles from "./pages/Roles";
import MafiaTeam from "./pages/roles/MafiaTeam";
import CitizenTeam from "./pages/roles/CitizenTeam";
import NeutralTeam from "./pages/roles/NeutralTeam";
import NeutralPeace from "./pages/roles/neutral/Peace";
import NeutralKiller from "./pages/roles/neutral/Killer";
import Game from "./pages/Game";

export default function App() {
  return (
    <Router basename="/Midnight-Mafia/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/roles/mafia" element={<MafiaTeam />} />
        <Route path="/roles/citizen" element={<CitizenTeam />} />
        <Route path="/roles/neutral" element={<NeutralTeam />} />
        <Route path="/roles/neutral/peace" element={<NeutralPeace />} />
        <Route path="/roles/neutral/killer" element={<NeutralKiller />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}
