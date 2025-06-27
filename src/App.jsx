import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explanation from "./pages/Explanation";
// import Roles from "./pages/Roles";
// import Game from "./pages/Game";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}