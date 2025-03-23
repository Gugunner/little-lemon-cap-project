/**
 * Creates a void promise that resolves after x millisecons have passed to simulate a delay event.
 * @param {int} ms - The millisecond that will pass before the promise resolves.
 * @returns - The resolved promised.
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
