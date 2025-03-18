import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
//import Gemini from "./pages/Gemini"; // Ensure Gemini.jsx exists

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Default Route (Root `/` opens HomePage) */}
        <Route path="/" element={<Navigate replace to="/home-page" />} />
        <Route path="/home-page" element={<HomePage />} />
        {/* <Route path="/gemini" element={<Gemini />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
