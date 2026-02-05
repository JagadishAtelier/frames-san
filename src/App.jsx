import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import WorkHero from "./Components/Work/WorkHero";
import ScrollToTop from "./Components/ScrollToTop";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:title" element={<WorkHero />} />
      </Routes>
    </Router>
  );
}
