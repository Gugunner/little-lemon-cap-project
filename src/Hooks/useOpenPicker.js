import { useCallback } from "react";

/**
 * Creates two React Hook callbacks that allow control of the HTML input picker by using its ref.
 * @param {React.RefObject<HTMLInputElement>} ref - The reference to the DOM input object.
 * @returns {{handleOpenPicker: function(), handleKeyDown: function()}} A callback that opens the picker safely and a callback that allows to to open the picker from the keyboard (used for accesibilty purposes).
 */
export default function useOpenPicker(ref) {
  const handleOpenPicker = useCallback(() => {
    //Safely checks if picker is available in Browser
    try {
      if (
        "showPicker" in HTMLInputElement.prototype &&
        ref.current?.showPicker &&
        typeof ref.current.showPicker === "function"
      ) {
        ref.current.showPicker();
      } else {
        console.warn("showPicker() is not supported by the browser");
      }
    } catch (error) {
      console.error("There was an error calling showPicker():", error);
    }
  }, [ref]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        handleOpenPicker();
      }
    },
    [handleOpenPicker]
  );

  return {
    handleOpenPicker,
    handleKeyDown,
  };
}
