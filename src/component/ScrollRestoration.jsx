import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ALWAYS_TOP_ROUTES = ["/gallery", "/login", "/checkout","/stay/:name"];

export default function ScrollRestoration() {
  const location = useLocation();
  const positions = useRef({});

  useEffect(() => {
    const pathname = location.pathname;

    // Routes that must always start at top
    if (ALWAYS_TOP_ROUTES.includes(pathname)) {
      window.scrollTo(0, 0);
      return;
    }

    // Restore previous scroll position if exists
    const savedY = positions.current[location.key];

    if (savedY !== undefined) {
      window.scrollTo(0, savedY);
    } else {
      window.scrollTo(0, 0);
    }

    // Save scroll position when leaving page
    return () => {
      positions.current[location.key] = window.scrollY;
    };
  }, [location]);

  return null;
}
