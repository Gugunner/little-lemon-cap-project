/** Checks if the fractional part of a number reaches or exceeds a specific value threshold.
 * @param {number} decimal - The decimal value that is evaluated.
 * @param {number} [threshold=0.5] threshold - A value between 0 and 1 by default is 0.5
 * @returns {boolean} - Whether there is a decimal value greater or equal to the threshold or not.
 */
export const isAboveFractionalThreshold = (decimal, threshold = 0.5) => {
  const fraction = decimal - Math.trunc(decimal);
  return fraction >= threshold ? true : false;
};

/** The value that comes before the period or comma in a float number
 * @param {number} decimal - The decimal value that is evaluated.
 * @returns {number} - The integer part of the value.
 */
export const getWholePart = (decimal) => Math.trunc(decimal);
