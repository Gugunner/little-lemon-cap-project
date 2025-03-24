/**
 * Creates a void promise that resolves after x millisecons have passed to simulate a delay event.
 * @param {int} ms - The millisecond that will pass before the promise resolves.
 * @returns - The resolved promised.
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Returns the hour and minutes as integer and float value.
 *
 * @param {string} time - The time in a "HH:MM" format.
 * @returns {{hour: number, minutes: number}} An object with the hour and minutes as an integer and float number respectively.
 */
export function parseTime(time) {
  const parsedTime = time.split(":");
  const hour = parseInt(parsedTime[0]);
  const minutes = parseInt(parsedTime[1]) / 100;
  return {
    hour,
    minutes,
  };
}
