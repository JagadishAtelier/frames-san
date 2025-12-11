import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import "./main.css";
import Home from "./pages/Home";
import StaylistPage from "./pages/Staylistpage";
import SmoothScroll from "./component/SmoothScroll.jsx";
import Navigation from "./component/Navigation.jsx";

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>
      {/* NAVIGATION */}

      <Navigation bg="transparent" />
      {/* ROUTES */}
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay/:name" element={<StaylistPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
