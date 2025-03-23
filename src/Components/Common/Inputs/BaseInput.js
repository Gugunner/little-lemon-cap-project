import React from "react";

/**
 * Renders a  container that constrains the dimensions and positions of the children, the icon and the error for an input.
 *
 * @param {React.Component} [icon] - An optional icon that is placed before the input element.
 * @param {boolean} [touched] - A flag that indicates if the input has been interacted with or not.
 * @param {string} [error] - The error message that will be displayed when the input is invalid.
 * @param {React.Component[]} children - All react components that are inputs to be constrained by this wrapper component.
 * @returns {React.Component} The constrained wrapped input component.
 */
export default function BaseInput({ icon, touched, error, children }) {
  return (
    <div className="grid input-container-grid">
      <div className="input-wrapper">
        {icon}
        {children}
      </div>
      {touched && error && <p className="input-error">{error}</p>}
    </div>
  );
}
