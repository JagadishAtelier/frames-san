import { useEffect, useState } from "react";

function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    setIsLarge(media.matches);

    const listener = () => setIsLarge(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isLarge;
}

export default useIsLargeScreen;
