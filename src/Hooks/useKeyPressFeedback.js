import { useCallback, useRef } from "react";
import { delay } from "../utils/time";

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
