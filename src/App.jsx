import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import "./main.css";
import Home from "./pages/Home";
import StaylistPage from "./pages/Staylistpage";
import SmoothScroll from "./component/SmoothScroll.jsx";
import Navigation from "./component/Navigation.jsx";
import Gallery from "./pages/Gallery.jsx";
import ScrollRestoration from "./component/ScrollRestoration.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import { ResortDetails } from "./pages/ResortDetails.jsx";

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>
      {/* NAVIGATION */}

      <Navigation bg="transparent" />
      {/* ROUTES */}
      <ScrollRestoration />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay/:name" element={<StaylistPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/resort/:name" element={<ResortDetails />} />
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
