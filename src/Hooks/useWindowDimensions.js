import { useEffect, useState } from "react";

/**
 * Returns the inner width and inner height of the running device window.
 * @returns {{width: number, height: number}} - An object containing the width and height
 */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

/**
 * A custom Hook that updates the device current window dimensions (width, height) using an event listener and returns it.
 * @returns {{width: number, height: number}} - The window dimensions.
 */
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return windowDimensions;
}
