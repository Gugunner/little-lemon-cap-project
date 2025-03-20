import React, { useRef } from "react";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-time.css";

export default function CustomTime({ name, value, onChange, min, max, icon }) {
  const ref = useRef(null);

  function handleOpenPicker() {
    try {
      if (
        "showPicker" in HTMLInputElement.prototype &&
        ref.current?.showPicker
      ) {
        ref.current.showPicker();
      } else {
        console.warn("showPicker() is not supported by the browser");
      }
    } catch (error) {
      console.error("There was an error calling showPicker():", error);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      handleOpenPicker();
    }
  }

  function handleOnChage(event) {
    onChange(event.target.value);
  }

  console.log("Value", value);
  return (
    <div className="input-wrapper">
      {icon}
      <input
        name={name}
        className="paragraph-text custom-input"
        type="time"
        ref={ref}
        value={value}
        onChange={handleOnChage}
        onClick={handleOpenPicker}
        onKeyDown={handleKeyDown}
        min={min}
        max={max}
      />
    </div>
  );
}
