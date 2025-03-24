import { object, string } from "yup";

function isValidTime(value, context) {
  if (value === "") return true;
  const splitTIme = value.split(":");
  const parsedHour = parseInt(splitTIme[0]);
  const parsedMinute = parseInt(splitTIme[1]) / 100;
  const parsedTime = parsedHour + parsedMinute;
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
