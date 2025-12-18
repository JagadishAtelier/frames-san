import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import StaylistPage from "./pages/Staylistpage";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import { ResortDetails } from "./pages/ResortDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import AuthPage from "./pages/AuthPage.jsx";

import SmoothScroll from "./component/SmoothScroll.jsx";
import Navigation from "./component/Navigation.jsx";
import ScrollRestoration from "./component/ScrollRestoration.jsx";

function Contact() {
  return <h1>Contact Page</h1>;
}

export default function App() {
  return (
    <Router>
      <ScrollRestoration />

      <Routes>
        {/* ================= AUTH ROUTE (NO NAV, NO SCROLL) ================= */}
        <Route path="/auth" element={<AuthPage />} />

        

        {/* ================= MAIN SITE ROUTES ================= */}
        <Route
          path="/*"
          element={
            <>
              <Navigation bg="transparent" />
              <SmoothScroll>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/stay/:name" element={<StaylistPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resort/:name" element={<ResortDetails />} />
                </Routes>
              </SmoothScroll>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
