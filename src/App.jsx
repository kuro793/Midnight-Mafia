import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explanation from "./pages/Explanation";
import Roles from "./pages/Roles";
import MafiaTeam from "./pages/roles/MafiaTeam";
import CitizenTeam from "./pages/roles/CitizenTeam";
import NeutralTeam from "./pages/roles/NeutralTeam";
import NeutralPeace from "./pages/roles/neutral/Peace";
import NeutralKiller from "./pages/roles/neutral/Killer";
import Players from "./pages/game/setting/Players";
import RoleSelect from "./pages/game/setting/RoleSelect";
import DayTimer from "./pages/game/setting/DayTimer";
import AssignRole from "./pages/game/AssignRole";
import PreGaming from "./pages/game/PreGaming";
import Gaming from "./pages/game/Gaming";

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
        <Route path="/players" element={<Players />} />
        <Route path="/role-select" element={<RoleSelect />} />
        <Route path="/day-timer" element={<DayTimer/>} />
        <Route path="/assign-role" element={<AssignRole/>} />
        <Route path="/pre-gaming" element={<PreGaming/>} />
        <Route path="/gaming" element={<Gaming/>} />
      </Routes>
    </Router>
  );
}
