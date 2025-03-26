import React, { useRef } from "react";

import BaseInput from "./BaseInput";

import "../../../styles/fonts.css";
import "../../../styles/inputs/custom-text-area.css";
import "../../../styles/inputs/custom-time.css";

/**
 * Renders a Text Area with a specific style.
 *
 * @param {string} name - The name of the input.
 * @param {string} [id] - The id of the input, if no id is provided it uses the name as the id.
 * @param {string} [value] - The value passed to HTML input that updates what it displays.
 * @param {Function(event)} onChange - The Callback function that will allow to read the event from the HTML input when its value changes.
 * @param {Function(event)} [onBlur] - The Callback function that will allow to read the event from the HTML input when it looses focus.
 * @param {string} [rows] - The number of rows the text area have.
 * @param {string} [cols] - The number of columns the text area can have.
 * @param {string} placeholder - The value shown before anything is entered on the input.
 * @param {string} [className] - Additional CSS classes for the input.
 * @param {string} [error] - The error message that will be displayed when the input is invalid.
 * @param {boolean} [touched] - A flag that indicates if the input has been interacted with or not.
 * @returns {React.Component} The custom text area input.
 */
export default function CustomTextArea({
  name,
  id,
  value,
  onChange,
  onBlur,
  rows,
  cols,
  placeholder,
  className,
  error,
  touched,
  ariaLabel,
}) {
  const ref = useRef(null);

  /**
   * Adds padding bottom when the input grows vertically more than 48px
   * @param {string} styleHeight - The css height value with px units.
   */
  function addPadding(styleHeight) {
    const height = parseInt(styleHeight.split("px")[0]);
    //Only add the padding the first time it surpasses 48px.
    if (height > 48 && ref.current.style.paddingBottom === "") {
      ref.current.style.paddingBottom = "0.875rem";
    }
  }

  function handleOnChange(event) {
    //Checks if there is a reference, style and height before allowing to automatically grow
    // as user types in.
    if (ref && ref.current?.style && ref.current?.scrollHeight) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      addPadding(ref.current.style.height);
    }
    onChange(event);
  }

  return (
    <BaseInput touched={touched} error={error} className="auto-height-wrapper">
      <textarea
        name={name}
        id={id || name}
        ref={ref}
        className={`paragraph-text custom-input custom-text-area ${className}`}
        value={value}
        onChange={handleOnChange}
        onBlur={onBlur}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />
    </BaseInput>
  );
}
