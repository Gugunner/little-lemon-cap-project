import { object, string } from "yup";
import { parseTime } from "./time";

/**
 * A test function that checks if the value which is a time with format "HH:MM" is valid for the form.
 *
 * @param {string} value - The time in a format "HH:MM".
 * @param {TestContext<Objec>} context - The context of Yup that allows creating the errors.
 * @returns {boolean} A flag that indicates if an error was found.
 */
function isValidTime(value, context) {
  if (value === "") return true;
  const { hour, minutes } = parseTime(value);
  const parsedTime = hour + minutes;
  const time = parsedTime !== 0 ? parsedTime : 24;

  if (0 < time && time < 9) {
    return context.createError({
      message: "The restaurant opens at 9:00 am",
    });
  } else if (20 < time && time < 21) {
    return context.createError({
      message: "The restaurant does no accept reservations later than 20:00 pm",
    });
  } else if (21 <= time && time <= 24) {
    return context.createError({
      message: "The restaurant closes at 21:00 pm",
    });
  }
  return true;
}

/**
 * The yup schema for the form.
 */
const formSchema = object({
  diners: string()
    .test(
      "is-big-party",
      (_) => "Party of 6 or more please call the restaurant.",
      (v) => v !== "6+"
    )
    .required("A number of diners must be selected."),
  time: string()
    .test({
      name: "is-valid-time",
      test(v, ctx) {
        return isValidTime(v, ctx);
      },
    })
    .required("A time needs to be selected"),
  appointedTime: string().required("Please provide a specific time"),
  name: string()
    .test(
      "is-name",
      (_) => "Please provide a valid name",
      (v) =>
        v === null || v === undefined || v === "" || /^[\p{L}. ]{1,}$/u.test(v)
    )
    .required("Please provide a name"),
  email: string()
    .email("Please provide a valid email")
    .required("Please provide an email"),
});

export { formSchema };
