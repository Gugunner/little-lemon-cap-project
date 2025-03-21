import React from "react";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-select.css";
import "../../../styles/inputs/input.css";

export default function CustomSelect({
  name,
  id,
  onChangeEvent,
  onBlur,
  icon,
  value,
  defaultOption,
  options,
  className,
  error,
  touched,
}) {
  function handleOnChange(event) {
    onChangeEvent(event);
  }

  return (
    <div className="grid input-container-grid">
      <div className="input-wrapper">
        {icon}
        <select
          className={`${"paragraph-text custom-input"} ${className}`}
          id={id || name}
          name={name}
          value={value}
          onChange={handleOnChange}
          onBlur={onBlur}
        >
          <option value={defaultOption.value} disabled>
            {defaultOption.text}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <img
          src="/assets/svgs/down-chevron.svg"
          className="chevron-icon"
          alt=""
        />
      </div>
      {touched && error && <p className="input-error">{error}</p>}
    </div>
  );
}
