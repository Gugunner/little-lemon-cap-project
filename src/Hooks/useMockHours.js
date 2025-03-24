import { useEffect, useState } from "react";

import { parseTime } from "../utils/time";
/**
 * Returns a value between 0 (included) and the max value (excluded).
 *
 * @param {int} max - The upper limit not included when calculating the random integer.
 * @returns {int} A value between 0 (included) and the max value (excluded).
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Adds a sequence of hours starting from the initial minutes and hour.
 * The sequence of hourse will always have increments or decrements of 30 minutes in batches of 3 hours.
 *
 * @param {boolean} before - Signals if the sequence should less than the passed hour and minutes, if true is less if false is greater.
 * @param {*} hour - The initial hour where the sequence starts, the initial hour is excluded.
 * @param {*} minutes - The initial minutes for the sequence, the initial minutes are excluded.
 * @returns {{text: string, unavailable: boolean}} An array of objects with the hour and a flag marking it as unavailable if true.
 */
function addHours(before, hour, minutes) {
  const hours = [];
  let curMinutes = minutes < 30 ? 0 : 30;
  let curHour = hour;
  for (let i = 0; i < 3; i++) {
    curMinutes = curMinutes === 30 ? 0 : 30;
    if (before && curMinutes === 30) {
      curHour -= 1;
    }
    if (!before && curMinutes === 0) {
      curHour += 1;
    }
    if ((before && curHour < 9) || (!before && curHour >= 20)) break;
    hours.push({
      text: curMinutes === 0 ? `${curHour}:00` : `${curHour}:30`,
      unavailable: false,
    });
  }
  return hours;
}

/**
 * A custom Hook that stores and returns a sequence of hours with a randomized availability with each time passed to it.
 *
 * @param {string} time - The time in a format of "HH:MM".
 * @returns {{text: string, unavailable: boolean}} An array of objects with the hour and a flag marking it as unavailable if true.
 */
export default function useMockHours(time) {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    const { hour, minutes } = parseTime(time);
    const hours = [
      {
        text: minutes < 30 ? `${hour}:00` : `${hour}:30`,
        unavailable: false,
      },
      ...addHours(true, hour, minutes),
      ...addHours(false, hour, minutes),
    ];
    hours.sort((h1, h2) => {
      const h1Time = parseTime(h1.text);
      const h2Time = parseTime(h2.text);
      const h1Value = h1Time.hour + h1Time.minutes;
      const h2Value = h2Time.hour + h2Time.minutes;
      return h1Value - h2Value;
    });
    for (var i = 0; i < 2; i++) {
      const bound = hours.length;
      const idx = getRandomInt(bound);
      hours[idx].unavailable = true;
    }
    setHours(hours);
  }, [time]);

  return hours;
}
