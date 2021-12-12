import { useState, useEffect } from "react";

export default function ScreenWidth({ minWidth, maxWidth, children }) {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(
    window.outerWidth
  );
  useEffect(() => {
    window.addEventListener("resize", () =>
      setCurrentScreenWidth(window.outerWidth)
    );
  }, []);
  return maxWidth >= currentScreenWidth && currentScreenWidth >= minWidth
    ? children
    : null;
}
