import React, { useRef } from "react";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-date.css";
import "../../../styles/inputs/input.css";

export default function CustomDate({
  name,
  onChange,
  value,
  minDate,
  maxDate,
  icon,
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
    onChange(event.target.value);
  }

  const curFormattedDate = value.toISOString().slice(0, 10);
  const minFormattedDate = (minDate || value).toISOString().slice(0, 10);
  const maxFormattedDate = maxDate.toISOString().slice(0, 10);
  return (
    <div className="input-wrapper">
      {icon}
      <input
        name={name}
        className="paragraph-text custom-input"
        type="date"
        ref={ref}
        value={curFormattedDate}
        onChange={handleOnChange}
        onClick={handleOpenPicker}
        onKeyDown={handleKeyDown}
        min={minFormattedDate}
        max={maxFormattedDate}
      />
    </div>
  );
}
