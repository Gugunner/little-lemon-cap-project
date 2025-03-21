import React, { useRef } from "react";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-date.css";
import "../../../styles/inputs/input.css";

export default function CustomDate({
  name,
  id,
  onChangeEvent,
  onBlur,
  value,
  min,
  max,
  icon,
  error,
  touched,
}) {
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

  function handleOnChange(event) {
    onChangeEvent(event);
  }

  return (
    <div className="grid input-container-grid">
      <div className="input-wrapper">
        {icon}
        <input
          name={name}
          id={id || name}
          className="paragraph-text custom-input"
          type="date"
          ref={ref}
          value={value}
          onChange={handleOnChange}
          onBlur={onBlur}
          onClick={handleOpenPicker}
          onKeyDown={handleKeyDown}
          min={min}
          max={max}
        />
      </div>
      {touched && error && <p className="input-error">{error}</p>}
    </div>
  );
}
