import PropTypes from "prop-types";
import { md } from "../Constants/sizes.js";

import useWindowDimensions from "../Hooks/useWindowDimensions.js";

/**A custom React Component that arranges layout based on the breakpoints provided
 * @constructor
 * @param {ReactNode[]} children - The different children that are rendered based on the breakpoint. Order them from the biggest breakpoint to the smallest breakpoint,
 * must always have one more child than the number of breakpoints.
 * @param {number[]} breakpoints - All the breakpoints that can be applied to the layout, will be copied and sorted in descending order.
 * @returns {ReactNode} - The react element chosen based on the breakpoint.
 */
export function HorizontalLayout({ children, breakpoints }) {
  const { width } = useWindowDimensions();

  // Checks if there are at least two children for the breakpoints or the default breakpoint.
  if (!Array.isArray(children) || children.length < 2) {
    console.error(
      "Layout componen expects at least two children but received:",
      children
    );
    //TODO: Replace with an Error Component
    return (
      <div>
        <h1>Error Component</h1>
      </div>
    );
  }

  if (breakpoints && breakpoints.length > 0) {
    // Validates that the rate of children to breakpoints is valid.
    if (children.length !== breakpoints.length + 1) {
      console.error(
        "There must be at least one more children than breakpoint for this Layout component to work"
      );
      //TODO: Replace with an Error Component
      return (
        <div>
          <h1>Error Component</h1>
        </div>
      );
    }

    // Copy and sort the breakpoints in descending order.
    const descendingBreakpoints = [...breakpoints].sort((a, b) => b - a);

    // Validates that all breakpoints are greeater than 0.
    for (const bp of descendingBreakpoints) {
      if (bp <= 0) {
        console.error(
          `Invalid breakpoint: Expected a positibve number, but received ${bp}`
        );
      }
    }

    for (var i = 0; i < descendingBreakpoints.length; i++) {
      if (width >= descendingBreakpoints[i]) {
        return children[i];
      }
    }

    // Returns the last children since no breakpoint applies.
    return children[children.length - 1];
  }

  // Uses the default breakpoint to return the layout.
  return width >= md ? children[0] : children[1];
}

HorizontalLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  breakpoints: PropTypes.arrayOf(PropTypes.number),
};
