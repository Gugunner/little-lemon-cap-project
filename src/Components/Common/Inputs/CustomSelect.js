import React, { useState } from "react";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-select.css";
import "../../../styles/inputs/input.css";

export default function CustomSelect({
  name,
  onChange,
  icon,
  defaultOption,
  options,
  className,
}) {
  const [selectValue, setSelectValue] = useState(defaultOption.value);

  function handleOnChange(event) {
    onChange(event.target.value);
    setSelectValue(event.target.value);
  }

  return (
    <div className="input-wrapper">
      {icon}
      <select
        className={`${"paragraph-text custom-input"} ${className}`}
        name={name}
        value={selectValue}
        onChange={handleOnChange}
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
  );
}
