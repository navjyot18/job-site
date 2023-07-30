import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const updateScreenType = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Add event listener to update the screen type when the window is resized
    window.addEventListener("resize", updateScreenType);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenType);
    };
  }, []);

  return isMobile;
};

export default useWindowSize;
