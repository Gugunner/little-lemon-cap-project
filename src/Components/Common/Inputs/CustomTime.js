import React, { useRef } from "react";

import useOpenPicker from "../../../Hooks/useOpenPicker";
import BaseInput from "./BaseInput";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-time.css";

/**
 * Renders a Time picker input with a specific style and takes control of opening the picker from the HTML input via Ref.
 *
 * @param {string} name - The name of the input.
 * @param {string} [id] - The id of the input, if no id is provided it uses the name as the id.
 * @param {string} [value] - The value passed to HTML input that updates what it displays.
 * @param {Function(event)} onChange - The Callback function that will allow to read the event from the HTML input when its value changes.
 * @param {Function(event)} [onBlur] - The Callback function that will allow to read the event from the HTML input when it looses focus.
 * @param {string} [min] - The minimum allowed time that can be chosen on the input.
 * @param {string} [max] - The maximum allowed time that can be chosen on the input.
 * @param {React.Component} [icon] - An optional icon that is placed before the input element.
 * @param {string} [className] - Additional CSS classes for the input.
 * @param {string} [error] - The error message that will be displayed when the input is invalid.
 * @param {boolean} [touched] - A flag that indicates if the input has been interacted with or not.
 * @returns {React.Component} The custom Time picker input.
 */
export default function CustomTime({
  name,
  id,
  value,
  onChange,
  onBlur,
  min,
  max,
  icon,
  className,
  error,
  touched,
  submitted,
  ariaLabel,
}) {
  const ref = useRef(null);
  const { handleOpenPicker, handleKeyDown } = useOpenPicker(ref);

  function handleOnChage(event) {
    onChange(event);
  }

  return (
    <BaseInput icon={icon} touched={touched} submitted={submitted} error={error}>
      <input
        name={name}
        id={id || name}
        className={`paragraph-text custom-input ${
          icon && "with-icon"
        } ${className}`}
        type="time"
        ref={ref}
        value={value}
        onChange={handleOnChage}
        onBlur={onBlur}
        onClick={handleOpenPicker}
        onKeyDown={handleKeyDown}
        min={min}
        max={max}
        aria-label={ariaLabel}
      />
    </BaseInput>
  );
}
