import { useCallback, useRef } from "react";
import { delay } from "../utils/time";

/**
 * A custom Hook that creates a callback that allows animating an element after a user press enter or space in the keyboard.
 *
 * @param {string} animation - The css keyframe animation class used by the element.
 * @param {int} duration - The duration in ms where the element has the animation class.
 * @returns
 */
export default function useKeyPressFeedback(
  animation = "animate-press",
  duration = 150
) {
  const ref = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (!ref) return;
      if ((event.key === "Enter" || event.key === " ") && ref.current) {
        ref.current.classList.add(animation);
      }
      delay(duration).then(() => {
        ref.current?.classList.remove(animation);
      });
    },
    [ref, animation, duration]
  );

  return { ref, handleKeyDown };
}
