/**A sequence generator like the one used in python
 * @constructor
 * @param {number} start - The initial value for the sequence.
 * @param {number} end - The final value for the sequence which is not included in the sequence.
 * @param {step} step - The size increase each for each value calculated from start.
 * @return {number[]} - The sequence as an array.
 */
export const range = (start, end, step) =>
  Array.from(
    { length: Math.ceil(end - start) / step },
    (_, idx) => start + idx * step
  );
