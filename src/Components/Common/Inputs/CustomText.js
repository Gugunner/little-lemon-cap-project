import React from "react";

import BaseInput from "./BaseInput";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-time.css";

/**
 * Renders a Text input with a specific style.
 *
 * @param {string} name - The name of the input.
 * @param {string} [id] - The id of the input, if no id is provided it uses the name as the id.
 * @param {string} [value] - The value passed to HTML input that updates what it displays.
 * @param {Function(event)} onChange - The Callback function that will allow to read the event from the HTML input when its value changes.
 * @param {Function(event)} [onBlur] - The Callback function that will allow to read the event from the HTML input when it looses focus.
 * @param {string} [min] - The minimum length the value of the input must have.
 * @param {string} [max] - The maximum length the value can have in the input.
 * @param {string} [placeholder] - The value shown before anything is entered on the input.
 * @param {React.Component} [icon] - An optional icon that is placed before the input element.
 * @param {string} [className] - Additional CSS classes for the input.
 * @param {string} [error] - The error message that will be displayed when the input is invalid.
 * @param {boolean} [touched] - A flag that indicates if the input has been interacted with or not.
 * @returns {React.Component} The custom text input.
 */
export default function CustomText({
  name,
  id,
  value,
  onChange,
  onBlur,
  min,
  max,
  placeholder,
  icon,
  className,
  error,
  touched,
  submitted,
  ariaLabel,
}) {
  function handleOnChange(event) {
    onChange(event);
  }

  return (
    <BaseInput icon={icon} touched={touched} submitted={submitted} error={error}>
      <input
        name={name}
        id={id}
        className={`paragraph-text custom-input ${
          icon && "with-icon"
        } ${className}`}
        type="text"
        value={value}
        onChange={handleOnChange}
        onBlur={onBlur}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </BaseInput>
  );
}
