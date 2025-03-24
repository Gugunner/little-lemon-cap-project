import React from "react";

import BaseInput from "./BaseInput";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-select.css";
import "../../../styles/inputs/input.css";

/**
 * Renders a Select dropdown input with a specific style.
 *
 *
 * @param {string} name - The name of the input.
 * @param {string} [id] - The id of the input, if no id is provided it uses the name as the id.
 * @param {string} [value] - The value passed to HTML input that updates what it displays.
 * @param {{string: string}[]} options - A list of objects with two attributes text, and value, where text is what is presented in the input and value represents tha data of the input.
 * @param {Function(event)} onChange - The Callback function that will allow to read the event from the HTML input when its value changes.
 * @param {Function(event)} [onBlur] - The Callback function that will allow to read the event from the HTML input when it looses focus.
 * @param {React.Component} [icon] - An optional icon that is placed before the input element.
 * @param {string} [className] - Additional CSS classes for the input.
 * @param {string} [error] - The error message that will be displayed when the input is invalid.
 * @param {boolean} [touched] - A flag that indicates if the input has been interacted with or not.
 * @returns {React.Component} The custom select dropdown input.
 */
export default function CustomSelect({
  name,
  id,
  value,
  options,
  onChange,
  onBlur,
  icon,
  className,
  error,
  touched,
}) {
  function handleOnChange(event) {
    onChange(event);
  }

  return (
    <BaseInput icon={icon} touched={touched} error={error}>
      <select
        className={`paragraph-text custom-input ${
          icon && "with-icon"
        } ${className}`}
        id={id || name}
        name={name}
        value={value || options[0].value}
        onChange={handleOnChange}
        onBlur={onBlur}
      >
        {options.map((option, idx) => (
          <option key={option.value} value={option.value} disabled={idx === 0}>
            {option.text}
          </option>
        ))}
      </select>
      <img
        src="/assets/svgs/down-chevron.svg"
        className="chevron-icon"
        alt=""
      />
    </BaseInput>
  );
}
